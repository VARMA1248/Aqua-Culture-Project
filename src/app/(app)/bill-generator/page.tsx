
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Loader2, Printer } from "lucide-react";
import { useState, useRef, createRef } from "react";
import { expenses, workers } from '@/lib/placeholder-data';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableFooter as BillFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const months = [
    { value: '10', label: 'October 2023' },
    { value: '9', label: 'September 2023' },
    { value: '8', label: 'August 2023' },
];

const reportTypes = [
    { value: 'expense', label: 'Monthly Expense Report' },
    { value: 'salary', label: 'Salary Slips' },
]

export default function BillGeneratorPage() {
    const [reportType, setReportType] = useState('expense');
    const [selectedMonth, setSelectedMonth] = useState('10');
    const [generatedReport, setGeneratedReport] = useState<React.ReactNode | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    
    const expenseReportRef = useRef<HTMLDivElement>(null);
    const salarySlipsRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);


    const handleDownloadPdf = async () => {
        setIsGenerating(true);
        if (reportType === 'expense' && expenseReportRef.current) {
            const canvas = await html2canvas(expenseReportRef.current, { 
                scale: 2,
                backgroundColor: '#ffffff'
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 15;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save(`expense-report-${months.find(m => m.value === selectedMonth)?.label}.pdf`);
        } else if (reportType === 'salary') {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            for (let i = 0; i < salarySlipsRefs.current.length; i++) {
                const slipRef = salarySlipsRefs.current[i];
                if (slipRef.current) {
                    const canvas = await html2canvas(slipRef.current, { 
                        scale: 2,
                        backgroundColor: '#ffffff'
                    });
                    const imgData = canvas.toDataURL('image/png');
                    const imgWidth = canvas.width;
                    const imgHeight = canvas.height;
                    const ratio = Math.min((pdfWidth - 20) / imgWidth, (pdfHeight - 20) / imgHeight);
                    const imgX = (pdfWidth - imgWidth * ratio) / 2;
                    const imgY = (pdfHeight - imgHeight * ratio) / 2;

                    if (i > 0) {
                        pdf.addPage();
                    }
                    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                }
            }
             pdf.save(`salary-slips-${months.find(m => m.value === selectedMonth)?.label}.pdf`);

        }
        setIsGenerating(false);
    }

    const handleGenerate = () => {
        setGeneratedReport(null); // Clear previous report
        if (reportType === 'expense') {
            const monthExpenses = expenses.filter(e => new Date(e.date).getMonth() === (parseInt(selectedMonth, 10) -1) );
            const total = monthExpenses.reduce((acc, exp) => acc + exp.amount, 0);

            setGeneratedReport(
                <Card className="mt-6" ref={expenseReportRef}>
                    <CardHeader>
                        <CardTitle>Expense Report - {months.find(m => m.value === selectedMonth)?.label}</CardTitle>
                        <CardDescription>A summary of all expenses for the selected month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {monthExpenses.map((expense) => (
                                <TableRow key={expense.id}>
                                    <TableCell>{new Date(expense.date).toLocaleDateString('en-IN')}</TableCell>
                                    <TableCell>
                                    <Badge variant="secondary">{expense.category}</Badge>
                                    </TableCell>
                                    <TableCell className="font-medium">{expense.description}</TableCell>
                                    <TableCell className="text-right">₹{expense.amount.toLocaleString()}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            <BillFooter>
                                <TableRow>
                                    <TableCell colSpan={3} className="text-right font-bold">Total</TableCell>
                                    <TableCell className="text-right font-bold">₹{total.toLocaleString()}</TableCell>
                                </TableRow>
                            </BillFooter>
                        </Table>
                    </CardContent>
                    <CardFooter className="justify-end gap-2 no-print">
                        <Button onClick={handleDownloadPdf} disabled={isGenerating}>
                            {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                            Download PDF
                        </Button>
                        <Button variant="outline" onClick={() => window.print()}>
                            <Printer className="mr-2 h-4 w-4" />
                            Print
                        </Button>
                    </CardFooter>
                </Card>
            );
        } else {
             salarySlipsRefs.current = workers.map(
                (_, i) => salarySlipsRefs.current[i] ?? createRef<HTMLDivElement>()
            );

            setGeneratedReport(
                 <div className="mt-6 space-y-4" id="printable-area">
                    {workers.map((worker, index) => (
                        <Card key={worker.id} ref={salarySlipsRefs.current[index]} className="break-inside-avoid print-only p-4">
                            <CardHeader>
                                <CardTitle>Salary Slip - {months.find(m => m.value === selectedMonth)?.label}</CardTitle>
                                <CardDescription>For: {worker.name}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <p><strong>Role:</strong> {worker.role}</p>
                                    <p><strong>Base Salary:</strong> ₹{worker.salary.toLocaleString()}</p>
                                    <p className="font-bold text-lg">Net Payable: ₹{worker.salary.toLocaleString()}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                     <div className="flex justify-end pt-4 gap-2 no-print">
                        <Button onClick={handleDownloadPdf} disabled={isGenerating}>
                            {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                            Download All Slips as PDF
                        </Button>
                         <Button variant="outline" onClick={() => window.print()}>
                            <Printer className="mr-2 h-4 w-4" />
                            Print
                        </Button>
                    </div>
                </div>
            );
        }
    }


  return (
    <div className="space-y-8">
        <Card className="no-print">
            <CardHeader>
                <CardTitle>Bill & Report Generator</CardTitle>
                <CardDescription>
                Select the report type and month to generate financial documents.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
                 <div className="space-y-2">
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select value={reportType} onValueChange={setReportType}>
                        <SelectTrigger id="report-type">
                            <SelectValue placeholder="Select a report type" />
                        </SelectTrigger>
                        <SelectContent>
                            {reportTypes.map(rt => (
                                <SelectItem key={rt.value} value={rt.value}>{rt.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="month">Month</Label>
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                        <SelectTrigger id="month">
                            <SelectValue placeholder="Select a month" />
                        </SelectTrigger>
                        <SelectContent>
                            {months.map(m => (
                                <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={handleGenerate}>
                    <Printer className="mr-2 h-4 w-4" />
                    Generate Report
                </Button>
            </CardFooter>
        </Card>

        <div id="pdf-content">
            {generatedReport}
        </div>
    </div>
  );
}

    
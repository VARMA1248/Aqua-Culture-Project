import type { Worker, Attendance, InventoryItem, Expense, MonthlySummary, CostOverTime } from './types';

export const workers: Worker[] = [
  { id: '1', name: 'Ravi Kumar', role: 'Worker', salary: 15000 },
  { id: '2', name: 'Sunita Sharma', role: 'Manager', salary: 30000 },
  { id: '3', name: 'Anil Patel', role: 'Worker', salary: 14500 },
  { id: '4', name: 'Priya Singh', role: 'Worker', salary: 15500 },
];

export const attendance: Attendance[] = [
  { id: 'a1', workerId: '1', date: '2023-10-01', status: 'Present' },
  { id: 'a2', workerId: '2', date: '2023-10-01', status: 'Present' },
  { id: 'a3', workerId: '3', date: '2023-10-01', status: 'Absent' },
  { id: 'a4', workerId: '4', date: '2023-10-01', status: 'Present' },
  { id: 'a5', workerId: '1', date: '2023-10-02', status: 'Present' },
  { id: 'a6', workerId: '2', date: '2023-10-02', status: 'Present' },
  { id: 'a7', workerId: '3', date: '2023-10-02', status: 'Present' },
  { id: 'a8', workerId: '4', date: '2023-10-02', status: 'Present' },
];

export const inventory: InventoryItem[] = [
  { id: 'i1', name: 'Standard Fish Feed (Grower)', category: 'Feed', quantity: 500, unit: 'kg', costPerUnit: 45 },
  { id: 'i2', name: 'High-Protein Fish Feed', category: 'Feed', quantity: 250, unit: 'kg', costPerUnit: 70 },
  { id: 'i3', name: 'Anti-Parasitic Treatment', category: 'Medicine', quantity: 50, unit: 'liters', costPerUnit: 1200 },
  { id: 'i4', name: 'Water Quality Enhancer', category: 'Medicine', quantity: 100, unit: 'bottles', costPerUnit: 350 },
  { id: 'i5', name: 'Fry Feed', category: 'Feed', quantity: 150, unit: 'kg', costPerUnit: 90 },
];

export const expenses: Expense[] = [
  { id: 'e1', date: '2023-10-05', category: 'Feed', description: 'Purchase of standard feed', amount: 22500 },
  { id: 'e2', date: '2023-10-07', category: 'Utilities', description: 'Electricity bill for pumps', amount: 8000 },
  { id: 'e3', date: '2023-10-15', category: 'Maintenance', description: 'Pond liner repair', amount: 5000 },
  { id: 'e4', date: '2023-10-20', category: 'Medicine', description: 'Stocking up treatments', amount: 15000 },
  { id: 'e5', date: '2023-10-31', category: 'Salary', description: 'Monthly salary payments', amount: 75000 },
];

export const monthlySummary: MonthlySummary[] = [
    { month: 'Jan', revenue: 180000, expenses: 120000 },
    { month: 'Feb', revenue: 200000, expenses: 130000 },
    { month: 'Mar', revenue: 240000, expenses: 150000 },
    { month: 'Apr', revenue: 220000, expenses: 140000 },
    { month: 'May', revenue: 260000, expenses: 160000 },
    { month: 'Jun', revenue: 300000, expenses: 180000 },
];

export const costOverTime: CostOverTime[] = [
    { date: '2023-01', feed: 40000, medicine: 15000 },
    { date: '2023-02', feed: 42000, medicine: 12000 },
    { date: '2023-03', feed: 48000, medicine: 18000 },
    { date: '2023-04', feed: 45000, medicine: 16000 },
    { date: '2023-05', feed: 50000, medicine: 20000 },
    { date: '2023-06', feed: 55000, medicine: 22000 },
];

export const expenseBreakdown = [
    { name: 'Salaries', value: 75000, fill: "hsl(var(--chart-1))" },
    { name: 'Feed', value: 48000, fill: "hsl(var(--chart-2))" },
    { name: 'Medicine', value: 20000, fill: "hsl(var(--chart-3))" },
    { name: 'Utilities', value: 12000, fill: "hsl(var(--chart-4))" },
    { name: 'Maintenance', value: 8000, fill: "hsl(var(--chart-5))" },
];

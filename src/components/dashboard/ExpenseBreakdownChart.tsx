'use client';

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

interface ExpenseBreakdownChartProps {
  data: { name: string; value: number; fill: string }[];
}

const chartConfig = {
    Salaries: { label: 'Salaries' },
    Feed: { label: 'Feed' },
    Medicine: { label: 'Medicine' },
    Utilities: { label: 'Utilities' },
    Maintenance: { label: 'Maintenance' },
} satisfies ChartConfig;


export function ExpenseBreakdownChart({ data }: ExpenseBreakdownChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
        <CardDescription>Breakdown of operational costs this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Tooltip
                cursor={{ fill: 'hsl(var(--muted))' }}
                content={<ChartTooltipContent formatter={(value) => `₹${value.toLocaleString()}`} />}
                />
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                ))}
                </Pie>
            </PieChart>
            </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MonthlySummary } from '@/lib/types';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

interface MonthlySummaryChartProps {
  data: MonthlySummary[];
}

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--primary))',
  },
  expenses: {
    label: 'Expenses',
    color: 'hsl(var(--accent))',
  },
} satisfies ChartConfig;

export function MonthlySummaryChart({ data }: MonthlySummaryChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Summary</CardTitle>
        <CardDescription>Revenue vs. Expenses for the last 6 months.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis
                tickFormatter={(value) => `₹${Number(value) / 1000}k`}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))' }}
                content={<ChartTooltipContent 
                    formatter={(value) => `₹${value.toLocaleString()}`}
                    indicator="dot"
                />}
              />
              <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} name="Revenue" />
              <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

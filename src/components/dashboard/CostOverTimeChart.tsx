'use client';

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CostOverTime } from '@/lib/types';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

interface CostOverTimeChartProps {
  data: CostOverTime[];
}

const chartConfig = {
    feed: {
        label: 'Feed',
        color: 'hsl(var(--primary))',
    },
    medicine: {
        label: 'Medicine',
        color: 'hsl(var(--accent))',
    },
} satisfies ChartConfig;


export function CostOverTimeChart({ data }: CostOverTimeChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Over Time</CardTitle>
        <CardDescription>Monthly costs for feed and medicine.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis
                tickFormatter={(value) => `₹${Number(value) / 1000}k`}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                />
                <Tooltip 
                    cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 2, strokeDasharray: '3 3' }}
                    content={<ChartTooltipContent formatter={(value) => `₹${value.toLocaleString()}`} indicator="dot" />}
                />
                <Line type="monotone" dataKey="feed" stroke="var(--color-feed)" strokeWidth={2} name="Feed" dot={false} />
                <Line type="monotone" dataKey="medicine" stroke="var(--color-medicine)" strokeWidth={2} name="Medicine" dot={false} />
            </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

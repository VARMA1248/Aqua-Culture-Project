import { Users, IndianRupee, Warehouse, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { MonthlySummaryChart } from '@/components/dashboard/MonthlySummaryChart';
import { CostOverTimeChart } from '@/components/dashboard/CostOverTimeChart';
import { ExpenseBreakdownChart } from '@/components/dashboard/ExpenseBreakdownChart';
import { workers, inventory, monthlySummary, costOverTime, expenseBreakdown } from '@/lib/placeholder-data';

export default function DashboardPage() {
  const totalWorkers = workers.length;
  const inventoryValue = inventory.reduce((acc, item) => acc + item.quantity * item.costPerUnit, 0);
  const totalExpensesMonth = expenseBreakdown.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Workers" value={totalWorkers.toString()} description="Currently employed personnel" Icon={Users} />
        <StatCard
          title="Total Expenses (Month)"
          value={`₹${totalExpensesMonth.toLocaleString()}`}
          description="Operational costs this month"
          Icon={IndianRupee}
        />
        <StatCard
          title="Inventory Value"
          value={`₹${inventoryValue.toLocaleString()}`}
          description="Total value of feed & medicine"
          Icon={Warehouse}
        />
        <StatCard
          title="Profitability"
          value="+12.5%"
          description="Compared to last month"
          Icon={TrendingUp}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <MonthlySummaryChart data={monthlySummary} />
        <CostOverTimeChart data={costOverTime} />
      </div>
       <div className="grid grid-cols-1 gap-8">
        <ExpenseBreakdownChart data={expenseBreakdown} />
      </div>
    </div>
  );
}

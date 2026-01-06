export type UserRole = 'Admin' | 'Manager' | 'Worker';

export interface Worker {
  id: string;
  name: string;
  role: UserRole;
  salary: number;
}

export interface Attendance {
  id: string;
  workerId: string;
  date: string;
  status: 'Present' | 'Absent';
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Feed' | 'Medicine';
  quantity: number;
  unit: string;
  costPerUnit: number;
}

export interface Expense {
  id: string;
  date: string;
  category: 'Salary' | 'Feed' | 'Medicine' | 'Utilities' | 'Maintenance';
  description: string;
  amount: number;
}

export type MonthlySummary = {
  month: string;
  revenue: number;
  expenses: number;
};

export type CostOverTime = {
  date: string;
  feed: number;
  medicine: number;
};

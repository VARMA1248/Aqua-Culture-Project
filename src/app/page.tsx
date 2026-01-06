
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, LayoutDashboard, IndianRupee, Users, Warehouse } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

const features = [
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Centralized Dashboard',
    description: 'Get a real-time overview of your entire farm operation with key metrics and interactive charts.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Worker Management',
    description: 'Easily manage employee information, roles, and track daily attendance to automate payroll.',
  },
  {
    icon: <Warehouse className="h-8 w-8 text-primary" />,
    title: 'Inventory Tracking',
    description: 'Monitor stock levels of essential supplies like feed and medicine to prevent shortages.',
  },
  {
    icon: <IndianRupee className="h-8 w-8 text-primary" />,
    title: 'Expense Logging',
    description: 'Keep a detailed record of all operational expenses to manage your budget effectively.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Report Generation',
    description: 'Automatically generate professional salary slips and monthly expense reports in PDF format.',
  },
    {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Secure Authentication',
    description: 'Secure user registration and login to ensure only authorized personnel can access farm data.',
    },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline">Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center md:px-6 md:py-32">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
            Welcome to the Aqua Culture Management System
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            The all-in-one digital solution to streamline your aquaculture farm, enhance productivity, and drive sustainable growth.
          </p>
          <div className="mt-8">
            <Link href="/login">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Features at a Glance
              </h2>
              <p className="mt-2 text-muted-foreground">
                Everything you need to manage your farm efficiently.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex items-center justify-between px-4 py-6 md:px-6">
          <Logo className="text-sm" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aqua Culture Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

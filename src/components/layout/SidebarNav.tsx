'use client';

import {
  LayoutDashboard,
  ClipboardList,
  Warehouse,
  IndianRupee,
  LogOut,
  Settings,
  FileText,
  Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from '../icons/Logo';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/workers', label: 'Workers', icon: Users },
  { href: '/attendance', label: 'Attendance', icon: ClipboardList },
  { href: '/inventory', label: 'Inventory', icon: Warehouse },
  { href: '/expenses', label: 'Expenses', icon: IndianRupee },
  { href: '/bill-generator', label: 'Bill Generator', icon: FileText },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/80 bg-card">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname.startsWith(item.href)}
                  tooltip={item.label}
                  className="justify-start"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
             <Link href="/settings">
                <SidebarMenuButton tooltip="Settings" className="justify-start">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                </SidebarMenuButton>
             </Link>
          </SidebarMenuItem>
           <SidebarMenuItem>
             <Link href="/login">
                <SidebarMenuButton tooltip="Log Out" className="justify-start">
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                </SidebarMenuButton>
             </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

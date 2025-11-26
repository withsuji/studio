import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Calendar,
  Clock,
  FileText,
  LayoutDashboard,
  Link,
} from 'lucide-react';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const links = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/dashboard/calendar',
    label: 'Calendar',
    icon: Calendar,
  },
  {
    href: '/dashboard/time-entries',
    label: 'Time Entries',
    icon: Clock,
  },
  {
    href: '/dashboard/invoices',
    label: 'Invoices',
    icon: FileText,
  },
  {
    href: '/book/alex-doe',
    label: 'Booking Page',
    icon: Link,
  },
];

export function MainNav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href}
            tooltip={link.label}
          >
            <RouterLink to={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </RouterLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

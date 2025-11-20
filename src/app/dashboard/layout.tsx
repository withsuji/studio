import React from 'react';

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import { Separator } from '@/components/ui/separator';
import { UserNav } from '@/components/user-nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon" side="left">
        <SidebarHeader className="p-4">
          <Logo />
        </SidebarHeader>
        <SidebarContent className="p-2">
          <MainNav />
        </SidebarContent>
        <SidebarFooter className="p-2 hidden group-data-[state=collapsed]:[data-sidebar=sidebar]:flex">
            <Separator className="my-2" />
            <UserNav />
        </SidebarFooter>
      </Sidebar>
      <div className="min-h-screen md:peer-data-[state=expanded]:[data-collapsible=icon]:pl-[16rem] peer-data-[state=collapsed]:[data-collapsible=icon]:pl-[3rem] transition-[padding-left] ease-in-out duration-200">
        {children}
      </div>
    </SidebarProvider>
  );
}

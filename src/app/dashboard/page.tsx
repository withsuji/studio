/**
 * src/app/dashboard/page.tsx
 * 
 * Dashboard Home Page.
 * Displays an overview of key metrics and recent activities.
 * 
 * Components:
 * - StatsCard: Displays individual metrics (Revenue, Focus Time, etc.)
 * - RevenueChart: Visualizes revenue trends
 * - RecentActivity: Shows a list of recent actions/events
 */
import { Activity, CreditCard, DollarSign, Percent } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StatsCard } from '@/components/dashboard/stats-card';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { Header } from '@/components/header';

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard" />
      <main className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Key Metrics Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Projected Revenue"
            value="$12,345"
            icon={DollarSign}
            change="+5.2% from last month"
          />
          <StatsCard
            title="Focus Time"
            value="68%"
            icon={Percent}
            change="+12% from last week"
            color="bg-accent"
          />
          <StatsCard
            title="Pending Invoices"
            value="3"
            icon={CreditCard}
            change="$7,200 total"
          />
          <StatsCard
            title="Hours Logged (Week)"
            value="32.5"
            icon={Activity}
            change="-2h from last week"
          />
        </div>
        
        {/* Charts and Activity Feed */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </main>
    </>
  );
}

import { WeekView } from '@/components/calendar/week-view';
import { Header } from '@/components/header';
import { mockEvents } from '@/lib/data';

export default function CalendarPage() {
  return (
    <>
      <Header title="Calendar" />
      <main className="p-4 sm:p-6 lg:p-8">
        <WeekView events={mockEvents} />
      </main>
    </>
  );
}

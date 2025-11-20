import { Header } from '@/components/header';
import { TimeEntriesTable } from '@/components/time-entries/time-entries-table';
import { mockTimeEntries } from '@/lib/data';

export default function TimeEntriesPage() {
  return (
    <>
      <Header title="Time Entries" />
      <main className="p-4 sm:p-6 lg:p-8">
        <TimeEntriesTable entries={mockTimeEntries} />
      </main>
    </>
  );
}

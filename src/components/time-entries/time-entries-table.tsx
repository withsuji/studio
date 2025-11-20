import type { TimeEntry } from '@/lib/types';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { BillableToggle } from './billable-toggle';

interface TimeEntriesTableProps {
  entries: TimeEntry[];
}

export function TimeEntriesTable({ entries }: TimeEntriesTableProps) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-right">Billable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => {
            const duration =
              (entry.end.getTime() - entry.start.getTime()) / 3600000; // in hours
            return (
              <TableRow key={entry.id}>
                <TableCell>
                  <div className="font-medium">{entry.title}</div>
                  <div className="text-sm text-muted-foreground truncate max-w-xs">
                    {entry.description}
                  </div>
                </TableCell>
                <TableCell>{entry.client}</TableCell>
                <TableCell>{format(entry.start, 'MMM d, yyyy')}</TableCell>
                <TableCell>{duration.toFixed(2)}h</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end">
                    <BillableToggle
                      title={entry.title}
                      description={entry.description}
                      isInitiallyBillable={entry.isBillable}
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}

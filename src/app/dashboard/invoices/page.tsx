import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { mockInvoices } from '@/lib/data';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { PlusCircle } from 'lucide-react';
import { Header } from '@/components/header';

export default function InvoicesPage() {
  return (
    <>
      <Header title="Invoices" />
      <main className="p-4 sm:p-6 lg:p-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Invoices</CardTitle>
            <CardDescription>
              A list of all your past and present invoices.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">
                      {invoice.invoiceNumber}
                    </TableCell>
                    <TableCell>{invoice.client}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          invoice.status === 'paid'
                            ? 'secondary'
                            : invoice.status === 'overdue'
                            ? 'destructive'
                            : 'outline'
                        }
                        className={cn(
                          invoice.status === 'paid' &&
                            'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
                          invoice.status === 'sent' &&
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                        )}
                      >
                        {invoice.status.charAt(0).toUpperCase() +
                          invoice.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(invoice.dueDate, 'MMM d, yyyy')}</TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(invoice.amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

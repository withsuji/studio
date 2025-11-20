import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { mockTimeEntries } from '@/lib/data';
import { formatDistanceToNow } from 'date-fns';

export function RecentActivity() {
  const recentEntries = mockTimeEntries.slice(0, 4);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentEntries.map((entry) => (
          <div key={entry.id} className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage
                src={`https://picsum.photos/seed/${entry.client}/100/100`}
                alt="Avatar"
                data-ai-hint="logo abstract"
              />
              <AvatarFallback>{entry.client.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{entry.title}</p>
              <p className="text-sm text-muted-foreground">
                {entry.client} &middot;{' '}
                {formatDistanceToNow(entry.start, { addSuffix: true })}
              </p>
            </div>
            <div className="ml-auto font-medium">
              +
              {(
                (entry.end.getTime() - entry.start.getTime()) /
                3600000
              ).toFixed(1)}
              h
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

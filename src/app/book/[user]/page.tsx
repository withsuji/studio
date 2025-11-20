import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookingForm } from '@/components/booking-form';
import { mockUser } from '@/lib/data';
import { Clock, Globe } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function BookingPage({ params }: { params: { user: string } }) {
  // In a real app, you'd fetch user data based on params.user
  const user = mockUser;

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto max-w-4xl p-4 sm:p-8">
        <header className="mb-8 flex justify-end">
           <Logo />
        </header>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="md:col-span-1 p-8 border-r">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-sm text-muted-foreground">Booking with</h2>
            <h1 className="text-2xl font-bold font-headline mb-4">{user.name}</h1>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>Timezone will be detected</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 p-4 sm:p-8">
            <BookingForm availability={user.availability} />
          </div>
        </main>
      </div>
    </div>
  );
}

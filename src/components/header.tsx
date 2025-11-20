import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from '@/components/user-nav';
import { Button } from './ui/button';
import { PlusCircle } from 'lucide-react';

export function Header({title}: {title: string}) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Entry
        </Button>
        <UserNav />
      </div>
    </header>
  );
}

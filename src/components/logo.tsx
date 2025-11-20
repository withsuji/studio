import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 text-lg font-bold font-headline text-primary',
        className
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M7 2h4l4.45 8.9A2 2 0 0 1 13.64 12H10a2 2 0 0 0-1.79 1.11L7 15" />
          <path d="M7 22h4l4.45-8.9A2 2 0 0 0 13.64 12H10a2 2a 0 0 1-1.79-1.11L7 9" />
        </svg>
      </div>
      <span className="hidden group-data-[state=expanded]:[data-sidebar=sidebar]:inline">
        FocusFlow
      </span>
    </div>
  );
}

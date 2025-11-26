import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn('font-body antialiased min-h-screen')}>
      {children}
      <Toaster />
    </div>
  );
}

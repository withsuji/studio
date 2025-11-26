import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';
// import { checkBillableAction } from '@/app/actions'; // Server Action Not Supported in Vite
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';

interface BillableToggleProps {
  title: string;
  description: string;
  isInitiallyBillable: boolean;
}

export function BillableToggle({
  title,
  description,
  isInitiallyBillable,
}: BillableToggleProps) {
  const [isBillable, setIsBillable] = useState(isInitiallyBillable);
  const [isAiLoading, setIsAiLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate AI check
    const timer = setTimeout(() => {
      setIsAiLoading(false);
      // In a real Vite app, you would call your API server here
      // const response = await fetch('/api/check-billable', ...);
      
      // For now, just toast that it's a demo
      /* 
      toast({
        title: 'AI Analysis (Demo)',
        description: 'AI features require a backend server in Vite mode.',
      });
      */
    }, 1000);

    return () => clearTimeout(timer);
  }, [title, description, toast]);

  if (isAiLoading) {
    return <Skeleton className="h-6 w-11 rounded-full" />;
  }

  return (
    <Switch
      checked={isBillable}
      onCheckedChange={setIsBillable}
      aria-label="Billable"
    />
  );
}

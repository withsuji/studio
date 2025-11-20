'use client';

import { useEffect, useState, useTransition } from 'react';
import { Switch } from '@/components/ui/switch';
import { checkBillableAction } from '@/app/actions';
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
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    if (title && description) {
      startTransition(async () => {
        try {
          const result = await checkBillableAction({ title, description });
          setIsBillable(result.isBillable);
          toast({
            title: 'AI Analysis Complete',
            description: result.reason,
          });
        } catch (error) {
          console.error('Failed to check billable status:', error);
          toast({
            variant: 'destructive',
            title: 'AI Analysis Failed',
            description:
              'Could not determine billable status. Please set manually.',
          });
        } finally {
          setIsAiLoading(false);
        }
      });
    } else {
      setIsAiLoading(false);
    }
  }, [title, description, toast]);

  if (isAiLoading) {
    return <Skeleton className="h-6 w-11 rounded-full" />;
  }

  return (
    <Switch
      checked={isBillable}
      onCheckedChange={setIsBillable}
      aria-label="Billable"
      disabled={isPending}
    />
  );
}

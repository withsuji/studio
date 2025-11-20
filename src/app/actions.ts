'use server';

import {
  detectBillableEntry,
  type DetectBillableEntryInput,
} from '@/ai/flows/billable-entry-detection';

export async function checkBillableAction(input: DetectBillableEntryInput) {
  try {
    const result = await detectBillableEntry(input);
    return result;
  } catch (error) {
    console.error('Error in checkBillableAction:', error);
    // Return a default non-billable state on error
    return { isBillable: false, reason: 'Error during analysis.' };
  }
}

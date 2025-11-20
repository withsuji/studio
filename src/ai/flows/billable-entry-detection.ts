'use server';

/**
 * @fileOverview Automatically flags calendar events as billable based on keywords.
 *
 * - detectBillableEntry - A function that determines if a calendar entry is billable.
 * - DetectBillableEntryInput - The input type for the detectBillableEntry function.
 * - DetectBillableEntryOutput - The return type for the detectBillableEntry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetectBillableEntryInputSchema = z.object({
  title: z.string().describe('The title of the calendar event.'),
  description: z.string().describe('The description of the calendar event.'),
});
export type DetectBillableEntryInput = z.infer<typeof DetectBillableEntryInputSchema>;

const DetectBillableEntryOutputSchema = z.object({
  isBillable: z.boolean().describe('Whether the calendar event is billable.'),
  reason: z.string().describe('The reason for the billability determination.'),
});
export type DetectBillableEntryOutput = z.infer<typeof DetectBillableEntryOutputSchema>;

export async function detectBillableEntry(input: DetectBillableEntryInput): Promise<DetectBillableEntryOutput> {
  return detectBillableEntryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'detectBillableEntryPrompt',
  input: {schema: DetectBillableEntryInputSchema},
  output: {schema: DetectBillableEntryOutputSchema},
  prompt: `You are an expert time tracking assistant. Analyze the calendar event title and description to determine if it is billable.

  Title: {{{title}}}
  Description: {{{description}}}

  Respond with whether the event is billable and the reasoning behind it.  Consider keywords like "meeting", "consulting", "development", "design", and "review" as indicators of billable time. Also, if the title or description refers to a specific client or project, it is likely billable.
`,
});

const detectBillableEntryFlow = ai.defineFlow(
  {
    name: 'detectBillableEntryFlow',
    inputSchema: DetectBillableEntryInputSchema,
    outputSchema: DetectBillableEntryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

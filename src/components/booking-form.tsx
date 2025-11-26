/**
 * src/components/booking-form.tsx
 * 
 * Booking Form Component.
 * Handles the logic for selecting a date and time slot, and submitting a booking request.
 * 
 * Props:
 * - availability: Object mapping days to available time slots.
 * 
 * Logic:
 * 1. User selects a date from the Calendar.
 * 2. Available time slots for that date are displayed.
 * 3. User selects a time slot.
 * 4. User fills in their details (Name, Email, Notes).
 * 5. Form submission simulates a booking process.
 */
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { format, getDay } from 'date-fns';
import { Availability } from '@/lib/types';
import { CheckCircle2 } from 'lucide-react';

// Map Javascript Date getDay() index to availability object keys
const dayMapping = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export function BookingForm({ availability }: { availability: Availability }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get available times for the selected date
  const dayName = selectedDate ? dayMapping[getDay(selectedDate)] : '';
  const availableTimes = selectedDate && availability[dayName] ? availability[dayName] : [];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would make an API call here
    console.log('Booking submitted for:', selectedDate, selectedTime);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4 animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
        <h2 className="text-2xl font-bold font-headline">Booking Confirmed!</h2>
        <p className="text-muted-foreground">
          You're all set for {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''} at{' '}
          {selectedTime}.
        </p>
        <p className="text-sm text-muted-foreground">A calendar invitation has been sent to your email.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-headline font-semibold mb-4">Select a Date & Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Date Selection */}
        <div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border p-0"
            // Disable past dates and days with no availability
            disabled={(date) => date < new Date() || !availability[dayMapping[getDay(date)]]}
          />
        </div>
        
        {/* Time Slot Selection */}
        <div className="max-h-80 overflow-y-auto space-y-2 pr-2">
          {availableTimes.length > 0 ? (
            availableTimes.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? 'default' : 'outline'}
                className="w-full justify-center"
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center pt-8">
              No available slots for this day.
            </p>
          )}
        </div>
      </div>

      {/* User Details Form */}
      {selectedTime && (
        <form onSubmit={handleBooking} className="mt-8 space-y-4">
          <h3 className="font-semibold font-headline">Enter Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">Booking details</Label>
            <Textarea id="details" />
          </div>
          <Button type="submit" className="w-full">
            Book for {selectedTime}
          </Button>
        </form>
      )}
    </div>
  );
}

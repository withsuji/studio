'use client';

import { useState } from 'react';
import { format, getDay } from 'date-fns';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

type Availability = {
  [day: string]: string[];
};

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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [isBooked, setIsBooked] = useState(false);

  const dayOfWeek = selectedDate ? dayMapping[getDay(selectedDate)] : '';
  const availableTimes = availability[dayOfWeek] || [];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-xl font-headline font-semibold mb-2">
          Meeting Booked!
        </h2>
        <p className="text-muted-foreground">
          Your meeting for {selectedTime} on {selectedDate && format(selectedDate, 'PPP')} has
          been confirmed.
        </p>
        <p className="text-muted-foreground">A calendar invitation has been sent to your email.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-headline font-semibold mb-4">Select a Date & Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border p-0"
            disabled={(date) => date < new Date() || !availability[dayMapping[getDay(date)]]}
          />
        </div>
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

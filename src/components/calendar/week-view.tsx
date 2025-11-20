'use client';

import { useState } from 'react';
import type { Event } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isSameDay,
  startOfWeek,
  add,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const hours = Array.from({ length: 13 }, (_, i) => 8 + i); // 8 AM to 8 PM

export function WeekView({ events }: { events: Event[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const start = startOfWeek(currentDate, { weekStartsOn: 1 });
  const end = endOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({ start, end });

  const getEventPositionAndHeight = (event: Event) => {
    const startHour = event.start.getHours() + event.start.getMinutes() / 60;
    const endHour = event.end.getHours() + event.end.getMinutes() / 60;
    const top = (startHour - 8) * 4; // 4rem per hour, starting from 8 AM
    const height = (endHour - startHour) * 4;
    return { top: `${top}rem`, height: `${height}rem` };
  };

  const goToPreviousWeek = () => {
    setCurrentDate(add(currentDate, { weeks: -1 }));
  };

  const goToNextWeek = () => {
    setCurrentDate(add(currentDate, { weeks: 1 }));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
      <header className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="text-lg font-headline font-semibold">
          {format(start, 'MMMM yyyy')}
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={goToPreviousWeek}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={goToNextWeek}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-[auto_1fr] overflow-auto">
        <div className="grid border-r">
          <div className="h-12"></div>
          {hours.map((hour) => (
            <div key={hour} className="relative h-16 border-t">
              <span className="absolute -top-2.5 right-2 text-xs text-muted-foreground">
                {format(new Date().setHours(hour), 'ha')}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {weekDays.map((day) => (
            <div
              key={day.toString()}
              className="relative border-r last:border-r-0"
            >
              <div className="sticky top-0 z-10 flex h-12 flex-col items-center justify-center border-b bg-card">
                <span className="text-sm font-medium">
                  {format(day, 'EEE')}
                </span>
                <span
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-full text-sm',
                    isSameDay(day, new Date()) &&
                      'bg-primary text-primary-foreground'
                  )}
                >
                  {format(day, 'd')}
                </span>
              </div>
              <div className="relative">
                {hours.map((_, index) => (
                  <div key={index} className="h-16 border-t"></div>
                ))}
                {events
                  .filter((event) => isSameDay(event.start, day))
                  .map((event) => {
                    const { top, height } = getEventPositionAndHeight(event);
                    return (
                      <div
                        key={event.id}
                        className={cn(
                          'absolute left-2 right-2 z-10 rounded-lg p-2 text-xs leading-tight shadow-md',
                          event.isFocusBlock
                            ? 'bg-accent/80 text-accent-foreground'
                            : 'bg-primary/80 text-primary-foreground'
                        )}
                        style={{ top, height }}
                      >
                        <p className="font-semibold">{event.title}</p>
                        <p>{event.description}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

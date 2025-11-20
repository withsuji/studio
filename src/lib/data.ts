import type { User, Event, TimeEntry, Invoice } from './types';

export const mockUser: User = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: 'https://picsum.photos/seed/avatar/100/100',
  availability: {
    monday: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    tuesday: ['09:00', '10:00', '14:00', '15:00'],
    wednesday: ['10:00', '11:00', '12:00', '15:00', '16:00'],
    thursday: ['09:00', '11:00', '12:00', '16:00'],
    friday: ['09:00', '10:00', '11:00', '12:00'],
  },
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);


export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Morning Focus Block',
    description: 'Deep work on Project Phoenix.',
    start: new Date(new Date().setHours(9, 0, 0, 0)),
    end: new Date(new Date().setHours(12, 0, 0, 0)),
    isFocusBlock: true,
  },
  {
    id: '2',
    title: 'Sync with Marketing Team',
    description: 'Weekly check-in on campaign progress.',
    start: new Date(new Date().setHours(13, 0, 0, 0)),
    end: new Date(new Date().setHours(13, 30, 0, 0)),
  },
  {
    id: '3',
    title: 'Client Call: Acme Corp',
    description: 'Review Q3 project milestones.',
    start: new Date(new Date().setHours(14, 0, 0, 0)),
    end: new Date(new Date().setHours(15, 0, 0, 0)),
  },
    {
    id: '4',
    title: 'Design Review',
    description: 'Finalize new landing page design.',
    start: new Date(new Date(yesterday).setHours(11, 0, 0, 0)),
    end: new Date(new Date(yesterday).setHours(12, 30, 0, 0)),
  },
  {
    id: '5',
    title: 'Planning for Next Sprint',
    description: 'Team planning session.',
    start: new Date(new Date(tomorrow).setHours(10, 0, 0, 0)),
    end: new Date(new Date(tomorrow).setHours(11, 0, 0, 0)),
  },
];

export const mockTimeEntries: TimeEntry[] = [
  {
    id: '3',
    title: 'Client Call: Acme Corp',
    description: 'Review Q3 project milestones.',
    start: new Date(new Date().setHours(14, 0, 0, 0)),
    end: new Date(new Date().setHours(15, 0, 0, 0)),
    isBillable: true,
    billed: false,
    client: 'Acme Corp',
  },
  {
    id: '4',
    title: 'Design Review',
    description: 'Finalize new landing page design.',
    start: new Date(new Date(yesterday).setHours(11, 0, 0, 0)),
    end: new Date(new Date(yesterday).setHours(12, 30, 0, 0)),
    isBillable: false, // AI will likely change this
    billed: false,
    client: 'Internal',
  },
   {
    id: '2',
    title: 'Sync with Marketing Team',
    description: 'Weekly check-in on campaign progress.',
    start: new Date(new Date().setHours(13, 0, 0, 0)),
    end: new Date(new Date().setHours(13, 30, 0, 0)),
    isBillable: false,
    billed: false,
    client: 'Internal',
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2024-003',
    client: 'Innovate LLC',
    issuedDate: new Date('2024-06-15'),
    dueDate: new Date('2024-07-15'),
    amount: 3200,
    status: 'paid',
  },
  {
    id: '2',
    invoiceNumber: 'INV-2024-004',
    client: 'Solutions Inc.',
    issuedDate: new Date('2024-07-01'),
    dueDate: new Date('2024-07-31'),
    amount: 5400,
    status: 'sent',
  },
  {
    id: '3',
    invoiceNumber: 'INV-2024-002',
    client: 'Tech Forward',
    issuedDate: new Date('2024-05-20'),
    dueDate: new Date('2024-06-20'),
    amount: 1800,
    status: 'overdue',
  },
  {
    id: '4',
    invoiceNumber: 'INV-2024-005',
    client: 'Innovate LLC',
    issuedDate: new Date('2024-07-10'),
    dueDate: new Date('2024-08-10'),
    amount: 2500,
    status: 'draft',
  },
];

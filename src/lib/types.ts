export interface User {
  name: string;
  email: string;
  avatarUrl: string;
  availability: {
    [day: string]: string[];
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  isFocusBlock?: boolean;
}

export interface TimeEntry extends Event {
  isBillable: boolean;
  billed: boolean;
  client: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;
  issuedDate: Date;
  dueDate: Date;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
}

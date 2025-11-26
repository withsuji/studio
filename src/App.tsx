/**
 * src/App.tsx
 * 
 * Main Application Component.
 * Configures the client-side routing using React Router.
 * Defines the layout structure and maps routes to page components.
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from '@/app/layout';
import Home from '@/app/page';
import DashboardLayout from '@/app/dashboard/layout';
import DashboardPage from '@/app/dashboard/page';
import CalendarPage from '@/app/dashboard/calendar/page';
import InvoicesPage from '@/app/dashboard/invoices/page';
import TimeEntriesPage from '@/app/dashboard/time-entries/page';
import BookingPage from '@/app/book/[user]/page';

function App() {
  return (
    <Router>
      {/* Root Layout wraps all routes to provide global providers (like Toaster) and styles */}
      <RootLayout>
        <Routes>
          {/* Public Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Dashboard Routes - Wrapped in DashboardLayout for Sidebar/Nav */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <DashboardPage />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/calendar"
            element={
              <DashboardLayout>
                <CalendarPage />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/invoices"
            element={
              <DashboardLayout>
                <InvoicesPage />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/time-entries"
            element={
              <DashboardLayout>
                <TimeEntriesPage />
              </DashboardLayout>
            }
          />
          
          {/* Booking Page Route - Dynamic User Parameter */}
          <Route path="/book/:user" element={<BookingPage />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;

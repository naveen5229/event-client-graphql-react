import './App.css';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import AuthPage from './pages/auth';
import EventPage from './pages/events';
import BookingPage from './pages/bookings';
import MainNavigation from './components/navigation/navigation';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/auth" />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  CheckCircle2,
  Home,
  BedDouble,
  CalendarDays,
  Users,
  ArrowRight,
} from "lucide-react";
import "./page.css";

const BookingConfirmationContent = () => {
  const searchParams = useSearchParams();

  const bookingId = searchParams.get("booking");

  return (
    <main className="confirmation-page">
      <section className="confirmation-section">
        <div className="confirmation-card">
          <div className="confirmation-icon">
            <CheckCircle2 size={42} />
          </div>

          <span className="confirmation-label">
            VELORA HOTEL & SUITES
          </span>

          <h1>Booking Request Received</h1>

          <p className="confirmation-description">
            Thank you for choosing Velora. Your booking request has been
            successfully submitted and is currently awaiting confirmation.
          </p>

          {bookingId && (
            <div className="booking-reference">
              <span>Booking Reference</span>
              <strong>{bookingId}</strong>
            </div>
          )}

          <div className="confirmation-details">
            <div className="confirmation-detail">
              <BedDouble size={20} />
              <div>
                <span>Room</span>
                <strong>Your selected room</strong>
              </div>
            </div>

            <div className="confirmation-detail">
              <CalendarDays size={20} />
              <div>
                <span>Status</span>
                <strong>Pending Confirmation</strong>
              </div>
            </div>

            <div className="confirmation-detail">
              <Users size={20} />
              <div>
                <span>Next step</span>
                <strong>Velora will review your request</strong>
              </div>
            </div>
          </div>

          <div className="confirmation-actions">
            <Link href="/" className="confirmation-home-button">
              <Home size={18} />
              Back to Home
            </Link>

            <Link href="/rooms" className="confirmation-rooms-button">
              Explore Rooms
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="confirmation-note">
            Please keep your booking reference for future communication
            regarding your reservation.
          </p>
        </div>
      </section>
    </main>
  );
};

const BookingConfirmationPage = () => {
  return (
    <Suspense
      fallback={
        <div className="confirmation-loading">
          Loading...
        </div>
      }
    >
      <BookingConfirmationContent />
    </Suspense>
  );
};

export default BookingConfirmationPage;

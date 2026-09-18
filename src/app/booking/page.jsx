"use client";

import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Users,
  BedDouble,
  Mail,
  Phone,
  User,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import "./page.css";

const rooms = {
  "deluxe-room": {
    name: "Deluxe Room",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    bed: "King Bed",
    guests: 2,
    size: "32 m²",
    price: 85000,
  },

  "executive-room": {
    name: "Executive Room",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
    bed: "King Bed",
    guests: 2,
    size: "38 m²",
    price: 110000,
  },

  "deluxe-suite": {
    name: "Deluxe Suite",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
    bed: "King Bed",
    guests: 3,
    size: "52 m²",
    price: 145000,
  },

  "family-suite": {
    name: "Family Suite",
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1000&q=85",
    bed: "King + Single Beds",
    guests: 4,
    size: "60 m²",
    price: 175000,
  },
};

const BookingPageContent = () => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room");

  const selectedRoom = useMemo(() => {
    return rooms[roomId] || rooms["deluxe-room"];
  }, [roomId]);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const [guestDetails, setGuestDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGuestDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference = end - start;
    const nights = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const total = nights * selectedRoom.price;

  return (
    <main className="booking-page">
      {/* HERO */}
      <section className="booking-hero">
        <div className="booking-hero-content">
          <Link href="/rooms" className="booking-back-link">
            <ArrowLeft size={17} />
            Back to Rooms
          </Link>

          <span>VELORA HOTEL & SUITES</span>

          <h1>Book Your Stay</h1>

          <p>
            Choose your dates, provide your details and get ready for a
            comfortable stay at Velora.
          </p>
        </div>
      </section>

      {/* BOOKING CONTENT */}
      <section className="booking-section">
        <div className="booking-layout">
          {/* FORM */}
          <div className="booking-form-container">
            <div className="booking-heading">
              <span className="booking-label">YOUR STAY</span>
              <h2>Reservation details</h2>
              <p>
                Tell us when you’ll be staying and how many guests will be
                joining you.
              </p>
            </div>

            {/* DATES */}
            <div className="booking-form-card">
              <div className="form-card-heading">
                <CalendarDays size={20} />
                <div>
                  <h3>Stay details</h3>
                  <p>Select your check-in and check-out dates.</p>
                </div>
              </div>

              <div className="booking-fields">
                <div className="booking-field">
                  <label htmlFor="check-in">Check-in</label>

                  <div className="input-wrapper">
                    <CalendarDays size={18} />

                    <input
                      id="check-in"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>

                <div className="booking-field">
                  <label htmlFor="check-out">Check-out</label>

                  <div className="input-wrapper">
                    <CalendarDays size={18} />

                    <input
                      id="check-out"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

                <div className="booking-field">
                  <label htmlFor="guests">Guests</label>

                  <div className="input-wrapper">
                    <Users size={18} />

                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      {Array.from(
                        { length: selectedRoom.guests },
                        (_, index) => index + 1
                      ).map((number) => (
                        <option value={number} key={number}>
                          {number} {number === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* GUEST DETAILS */}
            <div className="booking-form-card">
              <div className="form-card-heading">
                <User size={20} />
                <div>
                  <h3>Guest information</h3>
                  <p>Enter the details of the primary guest.</p>
                </div>
              </div>

              <div className="booking-fields guest-fields">
                <div className="booking-field full-field">
                  <label htmlFor="fullName">Full name</label>

                  <div className="input-wrapper">
                    <User size={18} />

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={guestDetails.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="booking-field">
                  <label htmlFor="email">Email address</label>

                  <div className="input-wrapper">
                    <Mail size={18} />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={guestDetails.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="booking-field">
                  <label htmlFor="phone">Phone number</label>

                  <div className="input-wrapper">
                    <Phone size={18} />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234..."
                      value={guestDetails.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="booking-field full-field">
                  <label htmlFor="requests">
                    Special requests <span>(optional)</span>
                  </label>

                  <div className="input-wrapper textarea-wrapper">
                    <MessageSquare size={18} />

                    <textarea
                      id="requests"
                      name="requests"
                      placeholder="Anything you'd like us to know?"
                      value={guestDetails.requests}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-security">
              <ShieldCheck size={20} />

              <div>
                <strong>Your information is secure.</strong>
                <p>
                  Your booking details will only be used to process your
                  reservation.
                </p>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <aside className="booking-summary">
            <div className="summary-image">
              <img src={selectedRoom.image} alt={selectedRoom.name} />
            </div>

            <div className="summary-content">
              <span className="summary-label">SELECTED ROOM</span>

              <h2>{selectedRoom.name}</h2>

              <div className="summary-room-info">
                <span>
                  <BedDouble size={16} />
                  {selectedRoom.bed}
                </span>

                <span>
                  <Users size={16} />
                  Up to {selectedRoom.guests}
                </span>

                <span>{selectedRoom.size}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Price per night</span>
                <strong>₦{selectedRoom.price.toLocaleString()}</strong>
              </div>

              <div className="summary-row">
                <span>Number of nights</span>
                <strong>{nights}</strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total</span>
                <strong>₦{total.toLocaleString()}</strong>
              </div>

              <button type="button" className="confirm-booking-button">
                Confirm Booking
                <ArrowRight size={18} />
              </button>

              <p className="summary-note">
                You’ll review your reservation before it is confirmed.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

const BookingPage = () => {
  return (
    <Suspense fallback={<div className="booking-loading">Loading...</div>}>
      <BookingPageContent />
    </Suspense>
  );
};

export default BookingPage;

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BedDouble,
  Users,
  Maximize,
  Wifi,
  Wind,
  Tv,
  Bath,
  Coffee,
  ArrowRight,
  Search,
  CalendarDays,
} from "lucide-react";
import "./page.css";

const rooms = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    description:
      "A comfortable and stylish room designed for a relaxing stay with everything you need close at hand.",
    bed: "King Bed",
    guests: 2,
    size: "32 m²",
    price: 85000,
    features: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Private Bathroom"],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy extra space, refined interiors and a calm atmosphere created for both business and leisure.",
    bed: "King Bed",
    guests: 2,
    size: "38 m²",
    price: 110000,
    features: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Room Service"],
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    description:
      "A spacious suite offering a separate sitting area, elegant details and a little more room to unwind.",
    bed: "King Bed",
    guests: 3,
    size: "52 m²",
    price: 145000,
    features: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Room Service"],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=85",
    description:
      "A spacious and welcoming suite made for families and groups who want comfort without feeling crowded.",
    bed: "King + Single Beds",
    guests: 4,
    size: "60 m²",
    price: 175000,
    features: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Private Bathroom"],
  },
];

const featureIcons = [
  { label: "Free Wi-Fi", icon: Wifi },
  { label: "Air Conditioning", icon: Wind },
  { label: "Smart TV", icon: Tv },
  { label: "Private Bathroom", icon: Bath },
  { label: "Room Service", icon: Coffee },
];

const page = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <main className="rooms-page">
      {/* HERO */}
      <section className="rooms-hero">
        <div className="rooms-hero-overlay"></div>

        <div className="rooms-hero-content">
          <span className="rooms-eyebrow">VELORA HOTEL & SUITES</span>

          <h1>Stay Your Way.</h1>

          <p>
            Discover thoughtfully designed rooms and suites created for
            comfort, relaxation and memorable stays.
          </p>

          <div className="rooms-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Rooms</span>
          </div>
        </div>
      </section>

      {/* AVAILABILITY BAR */}
      <section className="availability-section">
        <div className="availability-card">
          <div className="availability-heading">
            <span>PLAN YOUR STAY</span>
            <h2>Find your room</h2>
          </div>

          <div className="availability-fields">
            <div className="availability-field">
              <CalendarDays size={19} />

              <div>
                <label htmlFor="check-in">Check-in</label>
                <input
                  id="check-in"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
            </div>

            <div className="availability-field">
              <CalendarDays size={19} />

              <div>
                <label htmlFor="check-out">Check-out</label>
                <input
                  id="check-out"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>

            <div className="availability-field">
              <Users size={19} />

              <div>
                <label htmlFor="guests">Guests</label>

                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                </select>
              </div>
            </div>

            <button className="availability-button" type="button">
              <Search size={18} />
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* ROOM LIST */}
      <section className="rooms-list-section">
        <div className="rooms-section-header">
          <div>
            <span className="section-label">OUR ACCOMMODATION</span>
            <h2>Rooms & Suites</h2>
          </div>

          <p>
            Whether you are here for business, a weekend escape or a longer
            stay, find a space that feels like home.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.id}>
              <div className="room-image-wrapper">
                <img src={room.image} alt={room.name} />

                <div className="room-price">
                  <span>From</span>
                  <strong>{formatPrice(room.price)}</strong>
                  <small>/ night</small>
                </div>
              </div>

              <div className="room-card-content">
                <h3>{room.name}</h3>

                <p className="room-description">{room.description}</p>

                <div className="room-meta">
                  <span>
                    <BedDouble size={17} />
                    {room.bed}
                  </span>

                  <span>
                    <Users size={17} />
                    {room.guests} Guests
                  </span>

                  <span>
                    <Maximize size={17} />
                    {room.size}
                  </span>
                </div>

                <div className="room-features">
                  {room.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <div className="room-actions">
                  <Link
                    href={`/rooms/${room.id}`}
                    className="room-details-link"
                  >
                    View Details
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href={`/booking?room=${room.id}`}
                    className="room-book-button"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="room-features-section">
        <div className="room-features-header">
          <span className="section-label">COMFORT COMES FIRST</span>
          <h2>Everything you need for a comfortable stay.</h2>
          <p>
            Every Velora room is designed around the essentials that make your
            stay easy, comfortable and enjoyable.
          </p>
        </div>

        <div className="features-grid">
          {featureIcons.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="feature-item" key={feature.label}>
                <div className="feature-icon">
                  <Icon size={22} />
                </div>

                <span>{feature.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="rooms-bottom-cta">
        <div className="rooms-cta-content">
          <span className="section-label">YOUR STAY STARTS HERE</span>

          <h2>Find your room at Velora.</h2>

          <p>
            Make your stay comfortable from the moment you arrive. Choose your
            room and let us take care of the rest.
          </p>

          <Link href="/booking" className="cta-book-button">
            Book Your Stay
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;

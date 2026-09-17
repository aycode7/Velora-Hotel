"use client";

import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Car,
  ChevronRight,
  Coffee,
  MapPin,
  ShieldCheck,
  Sparkles,
  Utensils,
  Wifi,
} from "lucide-react";
import "./page.css";

const rooms = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description:
      "A comfortable and elegant room designed for a relaxing stay.",
    price: "₦85,000",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description:
      "More space, more comfort, and a refined setting for business or leisure.",
    price: "₦120,000",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description:
      "Our most spacious accommodation with an elevated hotel experience.",
    price: "₦180,000",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
  },
];

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    text: "Stay connected throughout your visit with reliable high-speed internet.",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    text: "Enjoy carefully prepared meals and refreshments without leaving the hotel.",
  },
  {
    icon: Car,
    title: "Parking",
    text: "Secure and convenient parking is available for our guests.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    text: "Your comfort and peace of mind remain a priority throughout your stay.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    alt: "Velora Hotel exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=85",
    alt: "Luxury hotel lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=85",
    alt: "Hotel swimming pool",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85",
    alt: "Hotel dining area",
  },
];

const page = () => {
  return (
    <main className="home">

      {/* HERO */}

      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-eyebrow">
            WELCOME TO VELORA HOTEL & SUITES
          </span>

          <h1>
            Comfort,
            <span> Elegance.</span>
            <br />
            Your Stay, Elevated.
          </h1>

          <p>
            Experience warm hospitality, thoughtfully designed rooms, and
            everything you need for a comfortable stay.
          </p>

          <div className="hero-buttons">
            <Link href="/booking" className="primary-btn">
              Book Your Stay
              <ArrowRight size={17} />
            </Link>

            <Link href="/rooms" className="secondary-btn">
              Explore Rooms
            </Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div />
        </div>
      </section>

      {/* BOOKING SEARCH */}

      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-heading">
            <span>PLAN YOUR STAY</span>
            <h2>Find Your Perfect Room</h2>
          </div>

          <form className="booking-form">
            <div className="booking-field">
              <CalendarDays size={22} />
              <div>
                <label htmlFor="check-in">Check In</label>
                <input id="check-in" type="date" required />
              </div>
            </div>

            <div className="booking-field">
              <CalendarDays size={22} />
              <div>
                <label htmlFor="check-out">Check Out</label>
                <input id="check-out" type="date" required />
              </div>
            </div>

            <div className="booking-field">
              <BedDouble size={20} />
              <div>
                <label htmlFor="guests">Guests</label>
                <select id="guests" defaultValue="2">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>

            <button type="submit" className="booking-btn">
              Check Availability
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* INTRO */}

      <section className="intro section">
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant Velora Hotel room"
          />

          <div className="intro-badge">
            <strong>EST.</strong>
            <span>2026</span>
          </div>
        </div>

        <div className="intro-content">
          <span className="section-label">ABOUT VELORA</span>

          <h2>
            A Place to
            <br />
            <span>Feel at Home.</span>
          </h2>

          <p>
            At Velora Hotel & Suites, we believe a great stay is about more
            than just a room. It is about comfort, convenience, thoughtful
            service, and an atmosphere that makes you want to stay a little
            longer.
          </p>

          <p>
            Whether you are visiting for business, a weekend getaway, or a
            special occasion, our spaces are designed to make your experience
            simple, comfortable, and memorable.
          </p>

          <Link href="/about" className="text-link">
            Discover Velora
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ROOMS */}

      <section className="rooms section">
        <div className="section-top">
          <div>
            <span className="section-label">ACCOMMODATION</span>
            <h2>Rooms Made for Rest</h2>
          </div>

          <Link href="/rooms" className="view-link">
            View All Rooms
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.id}>
              <div className="room-image">
                <img src={room.image} alt={room.name} />

                <div className="room-price">
                  <small>FROM</small>
                  <strong>{room.price}</strong>
                  <span>/ NIGHT</span>
                </div>
              </div>

              <div className="room-content">
                <h3>{room.name}</h3>

                <p>{room.description}</p>

                <Link href={`/rooms/${room.id}`} className="room-link">
                  View Room
                  <ChevronRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AMENITIES */}

      <section className="amenities">
        <div className="amenities-container">
          <div className="amenities-heading">
            <span className="section-label">HOTEL AMENITIES</span>

            <h2>
              Everything You Need,
              <br />
              <span>Under One Roof.</span>
            </h2>

            <p>
              From everyday essentials to little extras, we have designed
              Velora with your comfort in mind.
            </p>

            <Link href="/amenities" className="secondary-dark-btn">
              Explore Amenities
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="amenities-grid">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;

              return (
                <div className="amenity-card" key={amenity.title}>
                  <div className="amenity-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{amenity.title}</h3>

                  <p>{amenity.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section className="gallery section">
        <div className="section-top gallery-top">
          <div>
            <span className="section-label">A GLIMPSE OF VELORA</span>
            <h2>See the Experience</h2>
          </div>

          <Link href="/gallery" className="view-link">
            View Gallery
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Link
              href="/gallery"
              className={`gallery-item gallery-item-${index + 1}`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} />

              <div className="gallery-overlay">
                <Sparkles size={20} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCATION */}

      <section className="location">
        <div className="location-content">
          <div className="location-icon">
            <MapPin size={22} />
          </div>

          <div>
            <span className="section-label">FIND US</span>
            <h2>Easy to Find. Easy to Love.</h2>
            <p>
              Conveniently located with easy access to the places that matter
              most.
            </p>
          </div>

          <Link href="/contact" className="location-btn">
            Get Directions
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}

      <section className="home-cta">
        <div className="home-cta-overlay" />

        <div className="home-cta-content">
          <span>YOUR NEXT STAY STARTS HERE</span>

          <h2>
            Come Stay With
            <br />
            <em>Us.</em>
          </h2>

          <p>
            Comfortable rooms, thoughtful service, and a place that feels
            right from the moment you arrive.
          </p>

          <Link href="/booking" className="cta-btn">
            Book Your Stay
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default page;

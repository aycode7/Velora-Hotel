import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Users,
  Maximize,
  Wifi,
  Wind,
  Tv,
  Bath,
  Coffee,
  Check,
  CalendarDays,
} from "lucide-react";
import { notFound } from "next/navigation";
import "./page.css";

const rooms = {
  "deluxe-room": {
    name: "Deluxe Room",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85",
    description:
      "A comfortable and stylish room designed for a relaxing stay with everything you need close at hand.",
    longDescription:
      "Our Deluxe Room offers a peaceful and thoughtfully designed space for guests looking for comfort, convenience and a relaxing hotel experience. Whether you're visiting for business or leisure, the room gives you a welcoming place to unwind after a long day.",
    bed: "King Bed",
    guests: 2,
    size: "32 m²",
    price: 85000,
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Smart TV",
      "Private Bathroom",
      "Room Service",
      "Work Desk",
    ],
    amenities: [
      "King-size bed",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Smart TV",
      "Private bathroom",
      "Complimentary toiletries",
      "Work desk",
      "Daily housekeeping",
      "Room service",
      "Wardrobe",
      "Fresh towels",
      "24-hour assistance",
    ],
  },

  "executive-room": {
    name: "Executive Room",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=85",
    description:
      "Enjoy extra space, refined interiors and a calm atmosphere created for both business and leisure.",
    longDescription:
      "The Executive Room combines additional space with a refined atmosphere, making it a great choice for guests who want a little more room to work, relax and settle in during their stay.",
    bed: "King Bed",
    guests: 2,
    size: "38 m²",
    price: 110000,
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Smart TV",
      "Room Service",
      "Work Desk",
      "Private Bathroom",
    ],
    amenities: [
      "King-size bed",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Smart TV",
      "Private bathroom",
      "Complimentary toiletries",
      "Spacious work desk",
      "Daily housekeeping",
      "Room service",
      "Wardrobe",
      "Fresh towels",
      "24-hour assistance",
    ],
  },

  "deluxe-suite": {
    name: "Deluxe Suite",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=85",
    description:
      "A spacious suite offering a separate sitting area, elegant details and a little more room to unwind.",
    longDescription:
      "Our Deluxe Suite gives you the extra space and privacy you need for a more relaxed stay. With a comfortable sleeping area and separate space to sit back and unwind, it is designed for guests who want a little more from their accommodation.",
    bed: "King Bed",
    guests: 3,
    size: "52 m²",
    price: 145000,
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Smart TV",
      "Room Service",
      "Separate Sitting Area",
      "Private Bathroom",
    ],
    amenities: [
      "King-size bed",
      "Separate sitting area",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Smart TV",
      "Private bathroom",
      "Complimentary toiletries",
      "Work desk",
      "Daily housekeeping",
      "Room service",
      "Wardrobe",
      "Fresh towels",
    ],
  },

  "family-suite": {
    name: "Family Suite",
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1800&q=85",
    description:
      "A spacious and welcoming suite made for families and groups who want comfort without feeling crowded.",
    longDescription:
      "The Family Suite provides a generous amount of space for families and small groups. With comfortable sleeping arrangements and room to relax, it gives everyone enough space to enjoy their stay together.",
    bed: "King + Single Beds",
    guests: 4,
    size: "60 m²",
    price: 175000,
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Smart TV",
      "Private Bathroom",
      "Room Service",
      "Family Friendly",
    ],
    amenities: [
      "King-size bed",
      "Single beds",
      "Spacious living area",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Smart TV",
      "Private bathroom",
      "Complimentary toiletries",
      "Work desk",
      "Daily housekeeping",
      "Room service",
      "Wardrobe",
    ],
  },
};

const page = async ({ params }) => {
  const { id } = await params;
  const room = rooms[id];

  if (!room) {
    notFound();
  }

  return (
    <main className="room-details-page">
      {/* HERO */}
      <section
        className="room-details-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(11, 31, 51, 0.92),
            rgba(11, 31, 51, 0.55),
            rgba(11, 31, 51, 0.35)
          ), url(${room.image})`,
        }}
      >
        <div className="room-details-hero-content">
          <Link href="/rooms" className="back-to-rooms">
            <ArrowLeft size={17} />
            Back to Rooms
          </Link>

          <span className="room-details-label">VELORA HOTEL & SUITES</span>

          <h1>{room.name}</h1>

          <p>{room.description}</p>
        </div>
      </section>

      {/* ROOM OVERVIEW */}
      <section className="room-overview">
        <div className="room-overview-main">
          <span className="section-label">ROOM OVERVIEW</span>

          <h2>Comfort designed around you.</h2>

          <p>{room.longDescription}</p>

          <div className="room-overview-meta">
            <div>
              <BedDouble size={21} />
              <span>
                <small>Bed</small>
                {room.bed}
              </span>
            </div>

            <div>
              <Users size={21} />
              <span>
                <small>Guests</small>
                Up to {room.guests}
              </span>
            </div>

            <div>
              <Maximize size={21} />
              <span>
                <small>Room Size</small>
                {room.size}
              </span>
            </div>
          </div>
        </div>

        {/* BOOKING CARD */}
        <aside className="room-booking-card">
          <span>STARTING FROM</span>

          <div className="room-booking-price">
            ₦{room.price.toLocaleString()}
            <small>/ night</small>
          </div>

          <p>
            Rates may vary depending on your selected dates and availability.
          </p>

          <Link
            href={`/booking?room=${id}`}
            className="room-book-now"
          >
            Book This Room
            <ArrowRight size={18} />
          </Link>

          <div className="booking-note">
            <CalendarDays size={17} />
            <span>Choose your dates during booking.</span>
          </div>
        </aside>
      </section>

      {/* ROOM IMAGE */}
      <section className="room-feature-image">
        <img src={room.image} alt={room.name} />
      </section>

      {/* AMENITIES */}
      <section className="room-amenities-section">
        <div className="amenities-heading">
          <span className="section-label">ROOM AMENITIES</span>

          <h2>Everything you need.</h2>

          <p>
            Thoughtful essentials and modern comforts are included to make your
            stay as easy and enjoyable as possible.
          </p>
        </div>

        <div className="amenities-layout">
          <div className="amenities-icons">
            <div>
              <Wifi size={21} />
              <span>Free Wi-Fi</span>
            </div>

            <div>
              <Wind size={21} />
              <span>Air Conditioning</span>
            </div>

            <div>
              <Tv size={21} />
              <span>Smart TV</span>
            </div>

            <div>
              <Bath size={21} />
              <span>Private Bathroom</span>
            </div>

            <div>
              <Coffee size={21} />
              <span>Room Service</span>
            </div>
          </div>

          <div className="amenities-list">
            {room.amenities.map((amenity) => (
              <div key={amenity}>
                <Check size={17} />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="room-details-cta">
        <div>
          <span className="section-label">READY WHEN YOU ARE</span>

          <h2>Make yourself at home at Velora.</h2>

          <p>
            Choose your dates and reserve the {room.name.toLowerCase()} for
            your next stay.
          </p>

          <Link href={`/booking?room=${id}`} className="cta-book-button">
            Book Your Stay
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;

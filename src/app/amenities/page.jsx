import Link from "next/link";
import {
  Wifi,
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Car,
  Clock3,
  ShieldCheck,
  Sparkles,
  Tv,
  Wind,
  Shirt,
  Headphones,
} from "lucide-react";
import "./page.css";

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary Wi-Fi available throughout the hotel.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description:
      "Take a refreshing break and unwind by our comfortable swimming area.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Dining",
    description:
      "Enjoy delicious meals and refreshments without having to leave the hotel.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Centre",
    description:
      "Keep up with your routine in our convenient fitness area.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description:
      "Convenient on-site parking is available for guests throughout their stay.",
  },
  {
    icon: Clock3,
    title: "24/7 Reception",
    description:
      "Our front desk is available around the clock whenever you need assistance.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description:
      "Your comfort and peace of mind are supported by round-the-clock security.",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description:
      "Enjoy a clean and comfortable room with regular housekeeping service.",
  },
  {
    icon: Tv,
    title: "Smart TV",
    description:
      "Relax in your room with entertainment available on your in-room TV.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description:
      "Stay cool and comfortable with air conditioning in every guest room.",
  },
  {
    icon: Shirt,
    title: "Laundry Service",
    description:
      "Convenient laundry services are available to make longer stays easier.",
  },
  {
    icon: Headphones,
    title: "Guest Assistance",
    description:
      "Our team is ready to help with requests and make your stay more comfortable.",
  },
];

const page = () => {
  return (
    <main className="amenities-page">
      {/* HERO */}
      <section className="amenities-hero">
        <div className="amenities-hero-content">
          <span className="amenities-eyebrow">VELORA EXPERIENCE</span>

          <h1>
            Everything you need,
            <span> right here.</span>
          </h1>

          <p>
            From everyday essentials to thoughtful extras, Velora is designed
            to make your stay comfortable, convenient, and relaxing.
          </p>

          <Link href="/rooms" className="amenities-hero-button">
            Explore Our Rooms
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="amenities-intro">
        <span className="section-label">AMENITIES & SERVICES</span>

        <h2>Comfort goes beyond your room.</h2>

        <p>
          Whether you're here for business, a weekend getaway, or a longer
          stay, our facilities and services are designed to give you
          everything you need for a smooth and enjoyable experience.
        </p>
      </section>

      {/* AMENITIES GRID */}
      <section className="amenities-grid-section">
        <div className="amenities-grid">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <div className="amenity-card" key={amenity.title}>
                <div className="amenity-icon">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <h3>{amenity.title}</h3>

                <p>{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section className="amenities-feature">
        <div className="amenities-feature-image">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85"
            alt="Hotel wellness and relaxation area"
          />
        </div>

        <div className="amenities-feature-content">
          <span className="section-label">DESIGNED FOR YOU</span>

          <h2>Relax. Refresh. Enjoy your stay.</h2>

          <p>
            At Velora, the little things matter. From a comfortable room and
            reliable Wi-Fi to helpful service and spaces to unwind, every part
            of your stay is designed with your comfort in mind.
          </p>

          <Link href="/contact" className="amenities-feature-button">
            Contact Us
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="amenities-cta">
        <div>
          <span className="section-label">YOUR STAY AWAITS</span>

          <h2>Ready to experience Velora?</h2>

          <p>
            Find your ideal room and make your next stay a comfortable one.
          </p>
        </div>

        <Link href="/booking" className="amenities-cta-button">
          Book Your Stay
        </Link>
      </section>
    </main>
  );
};

export default page;

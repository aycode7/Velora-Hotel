import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import "./page.css";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "Your Hotel Address, Nigeria",
    link: "#",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+234 000 000 0000",
    link: "tel:+2340000000000",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "hello@velorahotel.com",
    link: "mailto:hello@velorahotel.com",
  },
  {
    icon: Clock3,
    title: "Reception",
    text: "Open 24 hours, 7 days a week",
    link: "#",
  },
];

const page = () => {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">VELORA HOTEL & SUITES</span>

          <h1>
            We'd love to <span>hear from you.</span>
          </h1>

          <p>
            Whether you have a question about your stay, need help planning
            your visit, or simply want to get in touch, our team is here to
            help.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details-section">
        <div className="contact-details-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h2>We're here when you need us.</h2>

          <p>
            Reach out to Velora using any of the contact options below. Our
            team will be happy to assist you.
          </p>
        </div>

        <div className="contact-details-grid">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={item.link}
                className="contact-detail-card"
                key={item.title}
              >
                <div className="contact-detail-icon">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <span>{item.title}</span>
                  <h3>{item.text}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-main-section">
        <div className="contact-main-image">
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85"
            alt="Velora Hotel interior"
          />
        </div>

        <div className="contact-main-content">
          <span className="section-label">LET'S TALK</span>

          <h2>Have a question?</h2>

          <p>
            Our team is available to help with room enquiries, bookings,
            special requests, directions, and anything else you may need
            before or during your stay.
          </p>

          <div className="contact-action-list">
            <a href="tel:+2340000000000" className="contact-action">
              <Phone size={19} />
              <span>Call Velora</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              <MessageCircle size={19} />
              <span>Chat on WhatsApp</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="mailto:hello@velorahotel.com"
              className="contact-action"
            >
              <Mail size={19} />
              <span>Send an Email</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="contact-location">
        <div className="contact-location-heading">
          <span className="section-label">FIND US</span>

          <h2>Come visit Velora.</h2>

          <p>
            We're conveniently located so you can settle in, relax, and enjoy
            your stay with ease.
          </p>
        </div>

        <div className="contact-map">
          <div className="map-placeholder">
            <MapPin size={34} strokeWidth={1.5} />

            <h3>Velora Hotel & Suites</h3>

            <p>Your Hotel Address, Nigeria</p>

            <span>Google Maps location will be added here.</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div>
          <span className="section-label">READY WHEN YOU ARE</span>

          <h2>Planning your next stay?</h2>

          <p>
            Explore our rooms and find a comfortable place to call home during
            your visit.
          </p>
        </div>

        <Link href="/rooms" className="contact-cta-button">
          Explore Rooms
        </Link>
      </section>
    </main>
  );
};

export default page;

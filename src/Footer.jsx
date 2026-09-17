import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { 
    FaFacebook,
    FaInstagram,
 } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">

          {/* BRAND */}

          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-main">Velora</span>
              <span className="footer-logo-sub">HOTEL & SUITES</span>
            </Link>

            <p>
              A comfortable stay, thoughtful hospitality, and a place to feel
              at home. Welcome to Velora Hotel & Suites.
            </p>

            <div className="footer-socials">
              <a
                href="#"
                aria-label="Instagram"
                className="footer-social"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="footer-social"
              >
                <FaFacebook size={17} />
              </a>

              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-column">
            <h3>Explore</h3>

            <Link href="/">Home</Link>
            <Link href="/rooms">Rooms & Suites</Link>
            <Link href="/about">About Us</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* SERVICES */}

          <div className="footer-column">
            <h3>Services</h3>

            <Link href="/booking">Book a Room</Link>
            <Link href="/amenities">Hotel Amenities</Link>
            <Link href="/contact">Location</Link>
            <Link href="/contact">Guest Services</Link>
          </div>

          {/* CONTACT */}

          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <a href="tel:+2340000000000">
              <Phone size={16} />
              <span>+234 000 000 0000</span>
            </a>

            <a href="mailto:hello@velorahotel.com">
              <Mail size={16} />
              <span>hello@velorahotel.com</span>
            </a>

            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>
                Your Hotel Address,
                <br />
                Nigeria
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER CTA */}

      <div className="footer-cta">
        <div className="footer-container footer-cta-container">
          <div>
            <span>READY FOR YOUR NEXT STAY?</span>
            <h2>Make yourself at home.</h2>
          </div>

          <Link href="/booking" className="footer-book-btn">
            Book Your Stay
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-container">
          <p>
            © 2026 Velora Hotel & Suites. All rights reserved.
          </p>

          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>

          <p className="footer-made">
            Designed with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

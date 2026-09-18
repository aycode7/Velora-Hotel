"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-main">Velora</span>
          <span className="logo-sub">HOTEL & SUITES</span>
        </Link>

        <nav className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/about">About</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="navbar-actions">
          <a
            href="tel:+2340000000000"
            className="navbar-icon-link"
            aria-label="Call Velora Hotel"
          >
            <Phone size={17} />
          </a>

          <a
            href="https://wa.me/2340000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            aria-label="WhatsApp Velora Hotel"
          >
            <MessageCircle size={18} />
          </a>

        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <nav className="mobile-links">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/rooms" onClick={closeMenu}>
            Rooms
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/amenities" onClick={closeMenu}>
            Amenities
          </Link>

          <Link href="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="mobile-actions">
          <a href="tel:+2340000000000" onClick={closeMenu}>
            <Phone size={17} />
            Call Us
          </a>

          <a
            href="https://wa.me/2340000000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

          <Link
            href="/booking"
            className="mobile-book-btn"
            onClick={closeMenu}
          >
            Book a Room
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

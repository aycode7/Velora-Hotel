import Link from "next/link";
import {
  ArrowRight,
  Award,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import "./page.css";

const page = () => {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>VELORA HOTEL & SUITES</span>

          <h1>More than a stay.</h1>

          <p>
            A welcoming space where thoughtful hospitality, modern comfort and
            genuine service come together.
          </p>

          <div className="about-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <div className="about-intro-image">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85"
            alt="Velora Hotel exterior"
          />
        </div>

        <div className="about-intro-content">
          <span className="about-label">WELCOME TO VELORA</span>

          <h2>A place designed to feel like home.</h2>

          <p>
            At Velora Hotel & Suites, we believe a great hotel experience is
            about more than a beautiful room. It is about how you feel from the
            moment you walk through the door.
          </p>

          <p>
            From comfortable accommodation and thoughtful amenities to warm,
            attentive service, every part of Velora is designed to make your
            stay easy, relaxing and memorable.
          </p>

          <Link href="/rooms" className="about-primary-button">
            Explore Our Rooms
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="about-stat">
          <strong>24/7</strong>
          <span>Guest Assistance</span>
        </div>

        <div className="about-stat">
          <strong>4+</strong>
          <span>Room Categories</span>
        </div>

        <div className="about-stat">
          <strong>100%</strong>
          <span>Comfort Focused</span>
        </div>

        <div className="about-stat">
          <strong>1</strong>
          <span>Place to Feel at Home</span>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-story-content">
          <span className="about-label">OUR STORY</span>

          <h2>Hospitality with intention.</h2>

          <p>
            Velora was created around a simple idea: a hotel should make life
            easier for its guests.
          </p>

          <p>
            Whether you are travelling for business, visiting family,
            celebrating a special occasion or simply taking some time away,
            your accommodation should give you the space and comfort to settle
            in.
          </p>

          <p>
            That idea shapes everything we do — from the rooms we provide to
            the details of the guest experience.
          </p>
        </div>

        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=85"
            alt="Elegant hotel interior"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-values-heading">
          <span className="about-label">WHAT WE STAND FOR</span>

          <h2>The Velora experience.</h2>

          <p>
            Every detail comes back to the same goal — giving our guests a
            comfortable place to relax, recharge and feel welcome.
          </p>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <div className="value-icon">
              <Heart size={23} />
            </div>

            <h3>Warm Hospitality</h3>

            <p>
              Friendly service and genuine attention to the little things that
              make guests feel welcome.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">
              <Sparkles size={23} />
            </div>

            <h3>Thoughtful Comfort</h3>

            <p>
              Comfortable rooms, useful amenities and carefully considered
              spaces designed around your stay.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">
              <ShieldCheck size={23} />
            </div>

            <h3>Peace of Mind</h3>

            <p>
              A reliable environment where guests can relax knowing their
              comfort and experience matter.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">
              <Users size={23} />
            </div>

            <h3>Guest First</h3>

            <p>
              We put our guests at the centre of the experience and aim to make
              every stay feel personal.
            </p>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="about-experience">
        <div className="about-experience-image">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85"
            alt="Hotel pool and relaxation area"
          />
        </div>

        <div className="about-experience-content">
          <span className="about-label">YOUR EXPERIENCE</span>

          <h2>Everything you need, right where you need it.</h2>

          <p>
            From relaxing in your room to enjoying the hotel's facilities,
            Velora gives you the flexibility to make your stay your own.
          </p>

          <div className="experience-points">
            <div>
              <Award size={20} />
              <span>Comfortable accommodation</span>
            </div>

            <div>
              <Award size={20} />
              <span>Modern hotel amenities</span>
            </div>

            <div>
              <Award size={20} />
              <span>Attentive guest service</span>
            </div>

            <div>
              <Award size={20} />
              <span>Convenient location</span>
            </div>
          </div>

          <Link href="/amenities" className="about-secondary-button">
            Explore Amenities
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-content">
          <span className="about-label">COME STAY WITH US</span>

          <h2>Your next comfortable stay starts here.</h2>

          <p>
            Discover your room, choose your dates and experience Velora for
            yourself.
          </p>

          <Link href="/rooms" className="about-cta-button">
            Find Your Room
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;

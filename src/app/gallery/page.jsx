import Link from "next/link";
import "./page.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
    title: "The Velora Exterior",
    category: "Hotel",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    title: "Deluxe Room",
    category: "Rooms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    title: "Executive Room",
    category: "Rooms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    title: "Deluxe Suite",
    category: "Suites",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85",
    title: "Hotel Lounge",
    category: "Interiors",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    title: "Relaxation Area",
    category: "Wellness",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=85",
    title: "Restaurant & Dining",
    category: "Dining",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=85",
    title: "Swimming Pool",
    category: "Facilities",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    title: "Comfortable Stay",
    category: "Rooms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
    title: "Guest Experience",
    category: "Hotel",
  },
];

const gallery = () => {
  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">VELORA HOTEL & SUITES</span>

          <h1>
            See the <span>Velora</span> experience.
          </h1>

          <p>
            Take a look around our rooms, spaces, facilities, and the details
            that make a stay at Velora feel comfortable.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="gallery-intro">
        <span className="section-label">OUR GALLERY</span>

        <h2>A glimpse of your next stay.</h2>

        <p>
          From peaceful rooms to welcoming common spaces, explore some of what
          Velora has to offer.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.title}
            >
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div>
          <span className="section-label">READY TO STAY?</span>

          <h2>Make the experience yours.</h2>

          <p>
            Explore our rooms and find the perfect space for your next stay.
          </p>
        </div>

        <Link href="/rooms" className="gallery-cta-button">
          Explore Rooms
        </Link>
      </section>
    </main>
  );
};

export default gallery;

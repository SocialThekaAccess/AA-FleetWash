import { useState } from 'react';
import blueTruck from '../assets/BlueTruck.png';
import truckWashImage from '../assets/TruckWash.png';
import whiteTruck1 from '../assets/TruckWhite1.png';
import washableTruck from '../assets/WashablwTruck.png';
import engineBayClean from '../assets/EngineBayClean.jpeg';
import kenworthSide from '../assets/kenworthsideprofile.png';
import heavyMachine from '../assets/HeavyMachine.png';
import heavyMachine1 from '../assets/HeavyMachine1.png';
import heavyMachine2 from '../assets/HeavyMachine2.png';
import heavyMachine3 from '../assets/HeavyMachine3.png';
import heavyMachine4 from '../assets/HeavyMachine4.png';
import crane1 from '../assets/Crane1Img.png';
import wheelBefore from '../assets/truck-wheelBefore.jpg';
import wheelAfter from '../assets/truck-wheelAfter.jpg';

import './Gallery.css';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const filters = [
    'All',
    'Trucks',
    'Fleet',
    'Detailing',
    'Before & After'
  ];

  const galleryItems = [
    {
      image: truckWashImage,
      title: 'Professional Truck Wash',
      subtitle: 'Complete Exterior Service',
      category: 'Trucks',
    },
    {
      image: whiteTruck1,
      title: 'White Fleet Truck',
      subtitle: 'Interior & Exterior',
      category: 'Fleet',
    },
    {
      image: engineBayClean,
      title: 'Engine Bay Detailing',
      subtitle: 'Deep Clean Service',
      category: 'Detailing',
    },
    {
      image: kenworthSide,
      title: 'Kenworth Wax & Protection',
      subtitle: 'Premium Finish',
      category: 'Detailing',
    },
    {
      image: washableTruck,
      title: 'Fleet Washing Program',
      subtitle: 'Regular Service',
      category: 'Fleet',
    },
    {
      image: heavyMachine4,
      title: 'Heavy Equipment Wash',
      subtitle: 'Construction Machinery',
      category: 'Trucks',
    },
    {
      image: heavyMachine3,
      title: 'Excavator Cleaning',
      subtitle: 'Heavy Machinery',
      category: 'Trucks',
    },
    {
      image: crane1,
      title: 'Farm Machinery Wash',
      subtitle: 'Agricultural Equipment',
      category: 'Trucks',
    },
    {
      image: blueTruck,
      title: 'Blue Truck Detail',
      subtitle: 'Exterior Service',
      category: 'Trucks',
    },
    {
      image: wheelBefore,
      title: 'Wheel Detail - Before',
      subtitle: 'Transformation',
      category: 'Before & After',
    },
    {
      image: wheelAfter,
      title: 'Wheel Detail - After',
      subtitle: 'Professional Result',
      category: 'Before & After',
    },
  ];

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  const featuredItems = filteredItems.slice(0, 3);
  const remainingItems = filteredItems.slice(3);

  const openImage = (item) => {
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const openBookingForm = () => {
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <main className="gallery-page">

      {/* HEADER */}
      <section className="gallery-top">
        <div className="gallery-heading">
          <div className="gallery-label">
            <span className="gallery-label-dot">●</span>
            OUR WORK
          </div>

          <h1>
            Real Trucks.<br/><span className="gallery-heading-highlight">Real Results.</span>
          </h1>

          <p>
            Professional fleet washing that keeps your trucks looking sharp and running proud. See the difference we make for operators across Melbourne.
          </p>
        </div>

        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>


      {/* FEATURED GRID */}
      {featuredItems.length > 0 && (
        <section className="featured-gallery">

          {/* LARGE CARD */}
          <GalleryCard
            item={featuredItems[0]}
            className="featured-main"
            onClick={() => openImage(featuredItems[0])}
            priority
          />

          {/* RIGHT CARDS */}
          {featuredItems.length > 1 && (
            <div className="featured-side">

              <GalleryCard
                item={featuredItems[1]}
                className="featured-small"
                onClick={() => openImage(featuredItems[1])}
                priority
              />

              {featuredItems[2] && (
                <GalleryCard
                  item={featuredItems[2]}
                  className="featured-small"
                  onClick={() => openImage(featuredItems[2])}
                  priority
                />
              )}

            </div>
          )}

        </section>
      )}


      {/* REST OF GALLERY */}
      {remainingItems.length > 0 && (
        <section className="gallery-grid">

          {remainingItems.map((item, index) => (
            <GalleryCard
              key={`${item.title}-${index}`}
              item={item}
              className="grid-card"
              onClick={() => openImage(item)}
            />
          ))}

        </section>
      )}


      {/* CTA */}
      <section className="gallery-cta">

        <div>
          <span className="cta-small">
            PROFESSIONAL FLEET CARE
          </span>

          <h2>
            Your Fleet Deserves
            <br />
            Premium Care.
          </h2>

          <p>
            Professional truck and fleet washing designed to
            keep your vehicles looking their best.
          </p>

          <a href="/quote" className="gallery-cta-btn">
            Request a Quote
            <span>→</span>
          </a>
        </div>

      </section>


      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeImage}
        >
          <button
            className="lightbox-close"
            onClick={closeImage}
          >
            ×
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-info">
              <div className="lightbox-text">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.subtitle}</p>
              </div>

              <div className="lightbox-actions">
                <a 
                  href="tel:+61489225500" 
                  className="lightbox-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Call Now"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </a>

                <button 
                  className="lightbox-icon-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openBookingForm();
                  }}
                  aria-label="Book Service"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING FORM POPUP */}
      {showBookingForm && (
        <div 
          className="booking-popup-overlay"
          onClick={closeBookingForm}
        >
          <div 
            className="booking-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="booking-popup-close"
              onClick={closeBookingForm}
            >
              ×
            </button>

            <div className="booking-popup-header">
              <h2>Book Your Service</h2>
              <p>Fill out the form and we'll get back to you shortly</p>
            </div>

            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" placeholder="+61" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label>Service Type *</label>
                <select required>
                  <option value="">Select a service</option>
                  <option value="exterior">Exterior Truck Wash</option>
                  <option value="interior">Interior Truck Wash</option>
                  <option value="engine">Engine Bay Clean</option>
                  <option value="heavy">Heavy Machinery</option>
                  <option value="wax">Wax & Paint Protection</option>
                  <option value="fleet">Fleet Washing Program</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="booking-submit-btn">
                Send Request
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}


/* REUSABLE CARD */

function GalleryCard({ item, className = '', onClick, priority = false }) {
  if (!item) return null;

  return (
    <article
      className={`gallery-card ${className}`}
      onClick={onClick}
    >
      <div className="gallery-image-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="gallery-image"
        />
      </div>

      <div className="gallery-gradient" />

      <button
        className="gallery-expand"
        aria-label="View full image"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M14 3h7v7" />
          <path d="M10 21H3v-7" />
          <path d="M21 3l-8 8" />
          <path d="M3 21l8-8" />
        </svg>
      </button>

      <div className="gallery-info">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>

        <span className="gallery-view">
          View Details
          <span>→</span>
        </span>
      </div>
    </article>
  );
}

export default Gallery;
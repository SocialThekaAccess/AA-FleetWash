import { useState } from 'react';
import logo from '../assets/AA-FleetWashbg.png';
import redTruck1 from '../assets/RedTruck1.png';
import redTruck2 from '../assets/RedTruck2.png';
import whiteTruck1 from '../assets/TruckWhite1.png';
import whiteTruck2 from '../assets/TruckWhite2.png';
import whiteTruck3 from '../assets/truckwhite3.png';
import minoTruck1 from '../assets/MinoTruck1.png';
import minoTruck2 from '../assets/MinoTruck2.png';
import truck1 from '../assets/Truck1.png';
import truck2 from '../assets/Truck2.png';
import cornerTruck from '../assets/CornorTruck.png';
import rightCornerTruck from '../assets/RightCornorTruck.png';
import wheelBefore from '../assets/truck-wheelBefore.jpg';
import wheelAfter from '../assets/truck-wheelAfter.jpg';
import digger from '../assets/Diggerr.png';
import craneWash from '../assets/CraneWash.png';
import towerCrane from '../assets/ToweerCrane.png';
import truckWashImage from '../assets/TruckWashimage.png';

import './Gallery.css';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    'All',
    'Trucks',
    'Fleet',
    'Detailing',
    'Before & After'
  ];

  const galleryItems = [
    {
      image: redTruck1,
      title: 'Mercedes Actros',
      subtitle: 'Full Detail',
      category: 'Trucks',
    },
    {
      image: whiteTruck1,
      title: 'Premium Fleet',
      subtitle: 'Professional Service',
      category: 'Fleet',
    },
    {
      image: minoTruck1,
      title: 'Fleet Washing',
      subtitle: 'Day Service',
      category: 'Fleet',
    },
    {
      image: redTruck2,
      title: 'Commercial Truck',
      subtitle: 'Complete Wash',
      category: 'Trucks',
    },
    {
      image: whiteTruck2,
      title: 'Heavy Duty',
      subtitle: 'Professional Clean',
      category: 'Trucks',
    },
    {
      image: truck1,
      title: 'Fleet Service',
      subtitle: 'Regular Maintenance',
      category: 'Fleet',
    },
    {
      image: minoTruck2,
      title: 'Trailer Wash',
      subtitle: 'Interior & Exterior',
      category: 'Fleet',
    },
    {
      image: whiteTruck3,
      title: 'Prime Mover',
      subtitle: 'Premium Detail',
      category: 'Detailing',
    },
    {
      image: truck2,
      title: 'Truck Detailing',
      subtitle: 'Deep Clean',
      category: 'Detailing',
    },
    {
      image: wheelBefore,
      title: 'Before',
      subtitle: 'Wheel Detail',
      category: 'Before & After',
    },
    {
      image: wheelAfter,
      title: 'After',
      subtitle: 'Wheel Detail',
      category: 'Before & After',
    },
    {
      image: cornerTruck,
      title: 'Construction Equipment',
      subtitle: 'Heavy Machinery',
      category: 'Trucks',
    },
    {
      image: rightCornerTruck,
      title: 'Fleet Operator',
      subtitle: 'Multi-Vehicle Service',
      category: 'Fleet',
    },
    {
      image: digger,
      title: 'Heavy Machinery',
      subtitle: 'Construction Equipment',
      category: 'Trucks',
    },
    {
      image: craneWash,
      title: 'Crane Washing',
      subtitle: 'Professional Crane Detail',
      category: 'Trucks',
    },
    {
      image: towerCrane,
      title: 'Tower Crane Service',
      subtitle: 'High-Reach Cleaning',
      category: 'Trucks',
    },
    {
      image: truckWashImage,
      title: 'Professional Truck Wash',
      subtitle: 'On-Site Service',
      category: 'Detailing',
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
          />

          {/* RIGHT CARDS */}
          {featuredItems.length > 1 && (
            <div className="featured-side">

              <GalleryCard
                item={featuredItems[1]}
                className="featured-small"
                onClick={() => openImage(featuredItems[1])}
              />

              {featuredItems[2] && (
                <GalleryCard
                  item={featuredItems[2]}
                  className="featured-small"
                  onClick={() => openImage(featuredItems[2])}
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
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}


/* REUSABLE CARD */

function GalleryCard({ item, className = '', onClick }) {
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
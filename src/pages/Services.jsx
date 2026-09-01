import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import truckWashImage from '../assets/TruckWash.png';
import truckWhite1 from '../assets/TruckWhite1.png';
import engineBayClean1 from '../assets/EngineBayClean.jpeg';
import engineBayClean2 from '../assets/EngineBayClean2.jpeg';
import kenworthSideProfile from '../assets/kenworthsideprofile.png';
import kenworthTruckFull from '../assets/kenworthtruckfull.png';
import heavyMachine1 from '../assets/HeavyMachine1.png';
import heavyMachine2 from '../assets/HeavyMachine2.png';
import heavyMachine3 from '../assets/HeavyMachine3.png';
import heavyMachine4 from '../assets/HeavyMachine4.png';
import crane2 from '../assets/Crane2Img.png';
import './Services.css';

// Reads the image's REAL natural size once it loads and applies that exact
// ratio to its parent .service-block-image box. This is only used for
// SINGLE-image services (no slider) — there's only one image, so there's
// no conflict. For slider services (multiple images), the container keeps
// a fixed aspect-ratio (set in CSS) and each <img> uses
// object-fit: contain, so no matter which slide is active, or how
// different its ratio is from the others, the photo is always shown in
// full and never cropped.
function applyNaturalAspectRatio(imgEl) {
  const container = imgEl.closest('.service-block-image');
  if (container && imgEl.naturalWidth && imgEl.naturalHeight) {
    container.style.aspectRatio = `${imgEl.naturalWidth} / ${imgEl.naturalHeight}`;
  }
}

// For sliders: every image already sits in the DOM (just hidden via
// opacity), so by the time a slide is shown its naturalWidth/naturalHeight
// are already available. This reads the CURRENTLY ACTIVE slide image's
// real size and resizes the shared container to match it exactly — so
// there's no white letterbox gap (mismatched ratio) and no cropping
// (forced-cover) for whichever image is showing.
function syncSliderAspectRatio(serviceId, activeIndex) {
  const container = document.querySelector(`#${serviceId} .service-block-image`);
  if (!container) return;
  const imgs = container.querySelectorAll('.image-slider img');
  const activeImg = imgs[activeIndex];
  if (activeImg && activeImg.naturalWidth && activeImg.naturalHeight) {
    container.style.aspectRatio = `${activeImg.naturalWidth} / ${activeImg.naturalHeight}`;
  }
}

function Services() {
  const location = useLocation();
  const [engineBaySlide, setEngineBaySlide] = useState(0);
  const [heavyMachinerySlide, setHeavyMachinerySlide] = useState(0);

  // Auto-play sliders
  useEffect(() => {
    const engineBayInterval = setInterval(() => {
      setEngineBaySlide(prev => (prev + 1) % 2); // 2 images
    }, 4000);

    const heavyMachineryInterval = setInterval(() => {
      setHeavyMachinerySlide(prev => (prev + 1) % 4); // 4 images
    }, 5000);

    return () => {
      clearInterval(engineBayInterval);
      clearInterval(heavyMachineryInterval);
    };
  }, []);

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const services = [
    {
      id: 'prime-mover',
      number: '01',
      badge: 'MOST BOOKED',
      eyebrow: 'THE FULL BODY SHINE.',
      title: 'Exterior Truck Wash',
      description: 'Two-bucket safe-wash on cabs, trailers, tankers, tippers and reefers. We dissolve road salt, brake dust and grime, without etching paint or aluminium.',
      features: [
        'pH-balanced foam',
        'Soft-touch mitts',
        'Wheel & rim detail'
      ],
      time: '60 to 90 min',
      image: truckWashImage,
      liveStatus: 'Prime mover detail'
    },
    {
      id: 'engine-bay',
      number: '02',
      eyebrow: 'CAB FIT FOR A LONG-HAUL.',
      title: 'Interior Truck Wash',
      description: 'Vacuum, steam, dash, vents, headliner, glass and seats. Smoke and odour treatment available. You\'ll forget how dirty it was.',
      features: [
        'Steam sanitise',
        'Leather conditioning',
        'Odour treatment'
      ],
      time: '90 to 120 min',
      image: truckWhite1,
      liveStatus: 'Truck + trailer'
    },
    {
      id: 'dog-tipper',
      number: '03',
      eyebrow: 'MECHANIC-READY IN AN HOUR.',
      title: 'Engine Bay Clean',
      description: 'Degrease, dress and protect, without damaging electricals. Ideal pre-service or pre-sale to find leaks, present cleanly and lift resale value.',
      features: [
        'Safe degreasers',
        'Plastic & rubber dressing',
        'Electrical-safe'
      ],
      time: '60 min',
      images: [engineBayClean1, engineBayClean2],
      liveStatus: 'Heavy combo wash'
    },
    {
      id: 'full-truck',
      number: '04',
      eyebrow: 'LOCK THE SHINE IN.',
      title: 'Wax & Paint Protection',
      description: 'Carnauba and ceramic-blend sealants that bead water for months. Protects paint from UV, road salt and bug-acid. Adds noticeable depth.',
      features: [
        '6-month protection',
        'Hydrophobic finish',
        'UV resistant'
      ],
      time: '2 hr',
      image: kenworthSideProfile,
      liveStatus: 'Mobile service'
    },
    {
      id: 'fleet-services',
      number: '05',
      eyebrow: 'FLEET-SCALE LOGISTICS.',
      title: 'Fleet Washing Program',
      description: 'Recurring programs for operators running 5+ rigs. Weekly, fortnightly or monthly. One invoice. Dedicated slots. Fleet-discount pricing.',
      features: [
        'Recurring schedules',
        'Volume pricing',
        'Priority slots'
      ],
      time: 'Custom',
      image: kenworthTruckFull,
      liveStatus: 'Fleet program'
    },
    {
      id: 'heavy-machinery',
      number: '06',
      eyebrow: 'DIRT THAT DOESN\'T BUDGET.',
      title: 'Heavy Machinery Wash',
      description: 'Purpose-built for loaders, excavators, graders, bulldozers and diggers. Hot-water pressure washing that strips mud, concrete and builder\'s dust without damaging hydraulics or decals.',
      features: [
        'High-pressure hot water',
        'Hydraulic-safe',
        'Undercarriage clean'
      ],
      time: '90 to 180 min',
      images: [heavyMachine4, heavyMachine3, heavyMachine1, heavyMachine2],
      liveStatus: 'Excavator clean'
    },
    {
      id: 'crane-wash',
      number: '07',
      eyebrow: 'REACH NEW HEIGHTS.',
      title: 'Crane Washing Service',
      description: 'Specialized cleaning for mobile cranes, tower cranes and boom lifts. We clean the cab, boom, chassis and undercarriage, safely removing grease, dust and construction grime.',
      features: [
        'Boom & chassis detail',
        'Safe on hydraulics',
        'Job-ready finish'
      ],
      time: '2 to 3 hr',
      image: crane2,
      liveStatus: 'Crane detail'
    }
  ];

  return (
    <div className="services-page-jsa">
      {/* Services List */}
      <section className="services-list-jsa">
        <div className="section-container">
          {services.map((service, index) => (
            <div key={index} id={service.id} className={`service-block ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              {/* Image Side */}
              <div className="service-block-image">
                {service.images ? (
                  // Slider for multiple images.
                  // NOTE: no onLoad / applyNaturalAspectRatio call here on
                  // purpose. The container keeps the fixed aspect-ratio
                  // from CSS, and every <img> uses object-fit: contain, so
                  // whichever slide is active is always shown in full —
                  // this is the fix for the crane images getting cut off.
                  <>
                    <div className="image-slider">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={
                            (service.id === 'engine-bay' ? engineBaySlide : 
                             heavyMachinerySlide) === imgIndex ? 'active' : ''
                          }
                        />
                      ))}
                    </div>
                    <div className="slider-dots">
                      {service.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          className={`slider-dot ${
                            (service.id === 'engine-bay' ? engineBaySlide : 
                             heavyMachinerySlide) === imgIndex ? 'active' : ''
                          }`}
                          onClick={() => 
                            service.id === 'engine-bay' ? setEngineBaySlide(imgIndex) : 
                            setHeavyMachinerySlide(imgIndex)
                          }
                          aria-label={`View image ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      className="slider-arrow slider-arrow-left"
                      onClick={() => {
                        const setter = service.id === 'engine-bay' ? setEngineBaySlide : 
                                      setHeavyMachinerySlide;
                        const current = service.id === 'engine-bay' ? engineBaySlide : 
                                       heavyMachinerySlide;
                        setter(current === 0 ? service.images.length - 1 : current - 1);
                      }}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      className="slider-arrow slider-arrow-right"
                      onClick={() => {
                        const setter = service.id === 'engine-bay' ? setEngineBaySlide : 
                                      setHeavyMachinerySlide;
                        const current = service.id === 'engine-bay' ? engineBaySlide : 
                                       heavyMachinerySlide;
                        setter((current + 1) % service.images.length);
                      }}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                ) : (
                  // Single image — dynamic aspect-ratio is safe here since
                  // there's only ever one photo for this box.
                  <img
                    src={service.image}
                    alt={service.title}
                    onLoad={(e) => applyNaturalAspectRatio(e.target)}
                  />
                )}
              </div>

              {/* Content Side */}
              <div className="service-block-content">
                <div className="service-eyebrow">{service.eyebrow}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>

                <ul className="service-check-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="service-time">
                  <span className="time-label">TYPICAL TIME</span>
                  <span className="time-value">{service.time}</span>
                </div>

                <div className="service-actions">
                  <Link to="/quote" className="btn-book">Book this →</Link>
                  <a href="tel:+61489225500" className="btn-call">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Call for a free quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
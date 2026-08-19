import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/AA-FleetWashbg.png';
import redTruck from '../assets/RedTruck.png';
import redTruck2 from '../assets/RedTruck2.png';
import whiteTruck1 from '../assets/TruckWhite1.png';
import whiteTruck2 from '../assets/TruckWhite2.png';
import whiteTruck3 from '../assets/truckwhite3.png';
import minoTruck1 from '../assets/MinoTruck1.png';
import minoTruck2 from '../assets/MinoTruck2.png';
import cornerTruck from '../assets/CornorTruck.png';
import truck1 from '../assets/Truck1.png';
import truck2 from '../assets/Truck2.png';
import wheelAfter from '../assets/truck-wheelAfter.jpg';
import wheelBefore from '../assets/truck-wheelBefore.jpg';
import truckTopView from '../assets/trucktopviewMachine.png';
import kenworthimg from '../assets/kenworthsideprofile.png';
import './Home.css';

function Home() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    { src: minoTruck2, alt: 'Exterior view' },
    { src: redTruck2, alt: 'Detail view' },
    { src: whiteTruck1, alt: 'Side view' }
  ];

  const services = [
    {
      code: 'PM-01',
      image: minoTruck2,
      title: 'Prime mover detail',
      description: 'Complete exterior and interior detailing for prime movers with professional-grade equipment.',
      badge: 'MOST BOOKED'
    },
    {
      code: 'EB-02',
      image: whiteTruck1,
      title: 'Engine bay clean',
      description: 'Thorough engine bay cleaning and degreasing with specialized solutions.'
    },
    {
      code: 'DT-03',
      image: minoTruck1,
      title: 'Dog & tipper clean',
      description: 'Professional cleaning for dog trailers and tipper trucks, inside and out.'
    },
    {
      code: 'FW-04',
      image: redTruck,
      title: 'Full truck wash',
      description: 'Complete truck washing service including cab, chassis, and undercarriage.'
    },
    {
      code: 'FP-05',
      image: truck1,
      title: 'Fleet washing program',
      description: 'Customized recurring programs for fleet operators with dedicated scheduling.'
    },

    // {
    //   code: 'HM-06',
    //   image: truck2,
    //   title: 'Heavy machinery wash',
    //   description: 'Specialized cleaning for construction equipment, excavators, and machinery.'
    // }

  ];

  const testimonials = [
    {
      name: 'Sukhjinder Singh',
      initial: 'SS',
      date: '1 month ago',
      rating: 5,
      text: 'Absolutely top-notch truck wash! Cleaned every single inch of my truck, inside and outside, and all the hard-to-reach spots.',
      image: wheelAfter,
      verified: true
    },
    {
      name: 'Kyri Petroudas',
      initial: 'KP',
      date: '3 weeks ago',
      rating: 5,
      text: 'Very happy with the service. Called on short notice, Jay booked me in, and did an absolutely amazing job on the truck and trailers.',
      image: whiteTruck2,
      verified: true
    },
    {
      name: 'Joseph Ruffo',
      initial: 'JR',
      date: '2 months ago',
      rating: 5,
      text: 'It\'s a pleasure doing business with them. Always punctual, and the detailing is absolutely brilliant!',
      image: redTruck2,
      verified: true
    },
    {
      name: 'Brett Bugeja',
      initial: 'BB',
      date: '10 months ago',
      rating: 5,
      text: 'Thank you for bringing my machinery back to life and ready to sell. Nothing missed, and they came on site exactly as discussed.',
      image: minoTruck2,
      verified: true
    },
    {
      name: 'Michael Chen',
      initial: 'MC',
      date: '4 months ago',
      rating: 5,
      text: 'Fleet program has been outstanding. Same quality every wash, and they work around our dispatch schedule perfectly.',
      image: whiteTruck3,
      verified: true
    },
    {
      name: 'David Thompson',
      initial: 'DT',
      date: '6 months ago',
      rating: 5,
      text: 'Engine bay came up immaculate. They know what they\'re doing with heavy machinery. Will be using them regularly.',
      image: truckTopView,
      verified: true
    },
    {
      name: 'Sarah Mitchell',
      initial: 'SM',
      date: '8 months ago',
      rating: 5,
      text: 'Professional service from start to finish. Walk-around inspection before they left was a nice touch. Highly recommend!',
      image: wheelBefore,
      verified: true
    }
  ];

  const whyChoose = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      ),
      title: '8+ years in the industry',
      description: 'Jaye and Steele have been around trucks long enough to know what aluminum needs, what paint can take, and what a hot wash will do to a vinyl wrap.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20 7 10 17l-5-5" />
          <path d="M21 12a9 9 0 1 1-5-8" />
        </svg>
      ),
      title: 'Reliable service, every job',
      description: 'Same crew. Same standards. Same care. Whether it\'s your first wash or your hundredth, you\'ll get the same finish every time.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
          <path d="M8.5 11.5 10.5 13l3.5-4" />
        </svg>
      ),
      title: 'Detail you can trust',
      description: 'Every job ends with a walk-around before we leave. If anything is not right, we re-do it on the spot.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
      title: 'Built around your dispatch',
      description: 'After-hours, weekends, depot windows or remote yards. We work when it suits you so a clean rig never costs you a load.'
    }
  ];

  return (
    <main className="aa-home">
      {/* ============ HERO ============ */}
      <section className="aa-hero">
        {/* Full Background Image */}
        <div className="aa-hero__bg">
          <img src={kenworthimg} alt="AA Fleet Wash Premium Truck Detailing" />
          <div className="aa-hero__overlay" />
        </div>

        {/* Hero Layout */}
        <div className="aa-hero__layout">
          {/* Main Content */}
          <div className="aa-hero__content">
            <div className="aa-eyebrow aa-eyebrow--hero">
              <span className="aa-eyebrow__dot" />
              MELBOURNE · MOBILE + EPPING YARD
            </div>

            <h1 className="aa-hero__title">
              Built for the road Detailed to stand out
            </h1>

            <p className="aa-hero__lead">
              Premium truck, fleet and heavy machinery detailing that works around your schedule. From on-site service across Melbourne to our Epping yard, we deliver a professional finish that keeps your fleet clean, sharp and ready for the next job.
            </p>

            <div className="aa-hero__actions">
              <Link to="/quote" className="aa-btn aa-btn--primary">
                GET A FREE QUOTE
              </Link>
              <a href="tel:+61489225500" className="aa-btn aa-btn--secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +61 489 225 500
              </a>
            </div>
          </div>

          {/* Quote Form */}
          <div className="aa-hero__form">
            <div className="aa-hero__form-header">
              <img src={logo} alt="AA Fleet Wash" className="aa-hero__form-logo" />
              <p>Fast response within 30 minutes</p>
            </div>
            <form className="aa-hero__form-body">
              <div className="aa-form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="aa-form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="aa-form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="aa-form-group">
                <select required>
                  <option value="">Select Service</option>
                  <option value="prime-mover">Prime Mover Detail</option>
                  <option value="engine-bay">Engine Bay Clean</option>
                  <option value="dog-tipper">Dog & Tipper Clean</option>
                  <option value="full-wash">Full Truck Wash</option>
                  <option value="fleet">Fleet Program</option>
                  <option value="heavy-machinery">Heavy Machinery</option>
                </select>
              </div>
              <div className="aa-form-group">
                <textarea placeholder="Tell us about your vehicle..." rows="3"></textarea>
              </div>
              <button type="submit" className="aa-btn aa-btn--primary aa-btn--full">
                Get Free Quote
              </button>
              <p className="aa-form-trust">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                Your information is secure and confidential
              </p>
            </form>
          </div>
        </div>

        {/* Full Width Reviews Carousel */}
        <div className="aa-hero__reviews-fullwidth">
          <div className="aa-hero__trust">
            <div className="aa-hero__trust-header">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <strong>5.0</strong>
              <span>73+ Google reviews</span>
            </div>
            
            <div className="aa-hero__reviews-carousel">
              <div className="aa-hero__reviews-track">
                {/* First set of reviews */}
                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={minoTruck2} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar">SS</div>
                    <div className="aa-hero__review-info">
                      <strong>Sukhjinder Singh <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>1 month ago</span>
                    </div>
                  </div>
                  <p>"Truck wash! JSA cleaned my rig, inside, outside, and everywhere always..."</p>
                </div>

                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={whiteTruck2} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar aa-hero__review-avatar--blue">KP</div>
                    <div className="aa-hero__review-info">
                      <strong>Kyri Petroudas <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>3 weeks ago</span>
                    </div>
                  </div>
                  <p>"Very happy with the service. Called on short notice, Jay booked me in..."</p>
                </div>

                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={redTruck2} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar aa-hero__review-avatar--sky">JR</div>
                    <div className="aa-hero__review-info">
                      <strong>Joseph Ruffo <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>2 months ago</span>
                    </div>
                  </div>
                  <p>"It's a pleasure doing business with them. Always punctual..."</p>
                </div>

                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={wheelAfter} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar aa-hero__review-avatar--orange">BB</div>
                    <div className="aa-hero__review-info">
                      <strong>Brett Bugeja <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>10 months ago</span>
                    </div>
                  </div>
                  <p>"Thank you for bringing my machinery back to life and ready to sell..."</p>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={minoTruck2} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar">SS</div>
                    <div className="aa-hero__review-info">
                      <strong>Sukhjinder Singh <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>1 month ago</span>
                    </div>
                  </div>
                  <p>"Truck wash! JSA cleaned my rig, inside, outside, and everywhere always..."</p>
                </div>

                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={whiteTruck2} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar aa-hero__review-avatar--blue">KP</div>
                    <div className="aa-hero__review-info">
                      <strong>Kyri Petroudas <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>3 weeks ago</span>
                    </div>
                  </div>
                  <p>"Very happy with the service. Called on short notice, Jay booked me in..."</p>
                </div>

                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={redTruck2} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar aa-hero__review-avatar--sky">JR</div>
                    <div className="aa-hero__review-info">
                      <strong>Joseph Ruffo <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>2 months ago</span>
                    </div>
                  </div>
                  <p>"It's a pleasure doing business with them. Always punctual..."</p>
                </div>

                <div className="aa-hero__review-card">
                  <div className="aa-hero__review-image">
                    <img src={wheelAfter} alt="Fleet wash result" />
                  </div>
                  <div className="aa-hero__review-meta">
                    <div className="aa-hero__review-avatar aa-hero__review-avatar--orange">BB</div>
                    <div className="aa-hero__review-info">
                      <strong>Brett Bugeja <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></strong>
                      <div className="aa-hero__review-stars">★★★★★</div>
                      <span>10 months ago</span>
                    </div>
                  </div>
                  <p>"Thank you for bringing my machinery back to life and ready to sell..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROOF DECK ============ */}
      <section className="aa-proof" aria-label="Fleet wash proof points">
        <div className="aa-shell aa-proof__grid">
          <div className="aa-proof__intro">
            <span>Proven on the road</span>
            <strong>Results operators keep coming back for.</strong>
          </div>
          <div className="aa-proof__metric">
            <small>Customers</small>
            <strong>300+</strong>
            <span>Satisfied customers</span>
          </div>
          <div className="aa-proof__metric">
            <small>Experience</small>
            <strong>8+</strong>
            <span>Years on the tools</span>
          </div>
          <div className="aa-proof__metric aa-proof__metric--reviews">
            <div className="aa-proof__reviews-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <strong>5.0</strong>
            </div>
            <span>73+ Google reviews</span>
          </div>
          <div className="aa-proof__metric">
            <small>Guarantee</small>
            <strong>100%</strong>
            <span>Re-wash guarantee</span>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="aa-services">
        <div className="aa-shell">
          <div className="aa-section-head">
            <div>
              <div className="aa-eyebrow aa-eyebrow--dark">
                <span className="aa-eyebrow__dot" />
                What we wash
              </div>
              <h2>
                Built for working rigs<span>Finished like show trucks</span>
              </h2>
            </div>
            <div className="aa-section-head__aside">
              <p>
                Six core services, one experienced crew. Choose a single detail or let us build a
                recurring fleet program around your dispatch
              </p>
              <Link to="/services" className="aa-link">
                Explore all services <i aria-hidden="true">↗</i>
              </Link>
            </div>
          </div>

          <div className="aa-services__grid">
            {services.map((service, index) => (
              <article className={`aa-service-card aa-service-card--${index + 1}`} key={service.code}>
                <div className="aa-service-card__media">
                  <img src={service.image} alt={service.title} />
                  <div className="aa-service-card__overlay" />
                  <div className="aa-service-card__meta">
                    <span>{service.code}</span>
                    <span>{service.badge || 'AVAILABLE'}</span>
                  </div>
                </div>
                <div className="aa-service-card__content">
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <Link
                    to="/quote"
                    aria-label={`Get a quote for ${service.title}`}
                    className="aa-service-card__arrow"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="aa-why">
        <div className="aa-shell aa-why__layout">
          <div className="aa-why__intro">
            <div className="aa-eyebrow">
              <span className="aa-eyebrow__dot" />
              Why operators stay
            </div>
            <h2>
              Premium standards.<span>Operator-level care</span>
            </h2>
            <p>
              The owners are still on the tools. That means clear communication, consistent
              workmanship and a proper sign-off before the job is called done.
            </p>
            <a href="tel:+61489225500" className="aa-link aa-link--light">
              Speak directly with the crew <i aria-hidden="true">↗</i>
            </a>
          </div>

          <div className="aa-why__list">
            {whyChoose.map((item, index) => (
              <article className="aa-why-card" key={item.title}>
                <div className="aa-why-card__icon">{item.icon}</div>
                <div className="aa-why-card__copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED SERVICE DETAIL ============ */}
      <section className="aa-featured-service">
        <div className="aa-shell aa-featured-service__layout">
          <div className="aa-featured-service__gallery">
            <div className="aa-featured-service__main-image">
              <div className="aa-featured-service__badge">01</div>
              <img src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} />
              <button className="aa-featured-service__btn aa-featured-service__btn--most">
                MOST BOOKED
              </button>
            </div>
            <div className="aa-featured-service__thumbnails">
              {galleryImages.map((image, index) => (
                <button 
                  key={index}
                  className={`aa-featured-service__thumb ${selectedImage === index ? 'aa-featured-service__thumb--active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
              ))}
            </div>
          </div>

          <div className="aa-featured-service__content">
            <div className="aa-eyebrow aa-eyebrow--dark">
              <span className="aa-eyebrow__dot" />
              CAB FIT FOR A LONG-HAUL
            </div>
            <h2>Exterior Truck Wash</h2>
            <p>
              Two-bucket safe-wash on cabs, trailers, tankers, tippers and reefers. We dissolve
              road salt, brake dust and grime, without etching paint or aluminium.
            </p>

            <div className="aa-featured-service__features">
              <div className="aa-featured-service__feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>pH-balanced foam</span>
              </div>
              <div className="aa-featured-service__feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Soft-touch mitts</span>
              </div>
              <div className="aa-featured-service__feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Wheel & rim detail</span>
              </div>
            </div>

            <div className="aa-featured-service__time">
              <span className="aa-featured-service__time-label">TYPICAL TIME</span>
              <strong>60–90 min</strong>
            </div>

            <div className="aa-featured-service__actions">
              <Link to="/quote" className="aa-btn aa-btn--brass">
                Book this →
              </Link>
              <a href="tel:0415275751" className="aa-btn aa-btn--ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call for a free quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="aa-process">
        <div className="aa-shell">
          <div className="aa-section-head aa-section-head--center">
            <div className="aa-eyebrow">
              <span className="aa-eyebrow__dot" />
              How it works
            </div>
            <h2>
              Three steps No runaround
            </h2>
          </div>

          <div className="aa-process__grid">
            <article className="aa-process-card">
              <span className="aa-process-card__num">01</span>
              <h3>Book your slot</h3>
              <p>Call, text or use the quote form. Tell us what you drive and where it is parked.</p>
            </article>
            <article className="aa-process-card">
              <span className="aa-process-card__num">02</span>
              <h3>We come to you</h3>
              <p>Mobile at your depot or drop in at our Epping yard — whichever keeps your operation moving.</p>
            </article>
            <article className="aa-process-card">
              <span className="aa-process-card__num">03</span>
              <h3>Walk-around sign-off</h3>
              <p>We inspect the result together. Anything missed is corrected on the spot, free.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="aa-cta">
        <div className="aa-shell">
          <div className="aa-cta__panel">
            <span className="aa-plate__rivet aa-plate__rivet--tl" />
            <span className="aa-plate__rivet aa-plate__rivet--tr" />
            <span className="aa-plate__rivet aa-plate__rivet--bl" />
            <span className="aa-plate__rivet aa-plate__rivet--br" />
            <div className="aa-cta__copy">
              <div className="aa-eyebrow">
                <span className="aa-eyebrow__dot" />
                Fleet programs
              </div>
              <h2>
                Keep the fleet clean.<span>Keep the fleet moving</span>
              </h2>
              <p>Weekly, fortnightly or monthly scheduling. One crew, one standard, one simple invoice</p>
            </div>
            <div className="aa-cta__actions">
              <Link to="/quote" className="aa-btn aa-btn--brass">
                Build my program <i aria-hidden="true">↗</i>
              </Link>
              <a href="tel:+61489225500" className="aa-btn aa-btn--ghost">
                Call +61 489 225 500
              </a>
              <small>Fully insured · Same-day availability · Pay after the job</small>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHATSAPP FLOATING BUTTON ============ */}
      <a 
        href="https://wa.me/61415275751" 
        target="_blank" 
        rel="noopener noreferrer"
        className="aa-whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  );
}

export default Home;
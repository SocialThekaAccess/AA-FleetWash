import { Link } from 'react-router-dom';
import heroBg from '../assets/AA-FleetWashbg.png';
import redTruck from '../assets/RedTruck.png';
import whiteTruck1 from '../assets/TruckWhite1.png';
import minoTruck1 from '../assets/MinoTruck1.png';
import cornerTruck from '../assets/CornorTruck.png';
import truck1 from '../assets/Truck1.png';
import truck2 from '../assets/Truck2.png';
import wheelAfter from '../assets/truck-wheelAfter.jpg';
import './Home.css';

function Home() {
  const services = [
    {
      code: 'PM-01',
      image: cornerTruck,
      title: 'Prime mover detail',
      description: 'Complete exterior and interior detailing for prime movers with professional-grade equipment.',
      badge: 'MOST BOOKED',
      badgeClass: 'badge-most-booked'
    },
    {
      code: 'EB-02',
      image: whiteTruck1,
      title: 'Engine bay clean',
      description: 'Thorough engine bay cleaning and degreasing with specialized solutions.',
      badgeClass: 'live-badge'
    },
    {
      code: 'DT-03',
      image: minoTruck1,
      title: 'Dog & tipper clean',
      description: 'Professional cleaning for dog trailers and tipper trucks, inside and out.',
      badgeClass: 'live-badge'
    },
    {
      code: 'FW-04',
      image: redTruck,
      title: 'Full truck wash',
      description: 'Complete truck washing service including cab, chassis, and undercarriage.',
      badgeClass: 'live-badge'
    },
    {
      code: 'FP-05',
      image: truck1,
      title: 'Fleet washing program',
      description: 'Customized recurring programs for fleet operators with dedicated scheduling.',
      badgeClass: 'live-badge'
    },
    {
      code: 'HM-06',
      image: truck2,
      title: 'Heavy machinery wash',
      description: 'Specialized cleaning for construction equipment, excavators, and machinery.',
      badgeClass: 'live-badge'
    }
  ];

  const testimonials = [
    {
      name: 'Sukhjinder Singh',
      initial: 'SS',
      date: '1 month ago',
      rating: 5,
      text: 'Absolutely top-notch truck wash! JSA cleaned every single inch of my truck, inside and outside, and all the hard-to-reach spots. Super detailed, the team is friendly, and the truck looked brand new when finished.',
      image: wheelAfter,
      verified: true
    },
    {
      name: 'Kyri Petroudas',
      initial: 'KP',
      date: '3 weeks ago',
      rating: 5,
      text: 'Very happy with the service. Called on short notice, Jay booked me in, and did an absolutely amazing job on the truck and trailers. Very professional. Highly recommend. Love the result!',
      image: truck1,
      verified: true
    },
    {
      name: 'Joseph Ruffo',
      initial: 'JR',
      date: '2 months ago',
      rating: 5,
      text: 'It\'s a pleasure doing business with them. Always punctual, they give me any assistance from us, and the detailing is absolutely brilliant!',
      image: truck2,
      verified: true
    },
    {
      name: 'Brett Bugeja',
      initial: 'BB',
      date: '10 months ago',
      rating: 5,
      text: 'Thank you JSA for bringing my machinery back to life and ready to sell. Nothing missed, and they came on site exactly as discussed. I\'ll definitely get you back.',
      image: truck2,
      verified: true
    }
  ];

  const whyChoose = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: '8+ years in the industry',
      description: 'Jaye and Steele have been around trucks long enough to know what aluminum needs, what paint can take, and what a hot wash will do to a vinyl wrap.'
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Reliable service, every job',
      description: 'Same crew. Same standards. Same care. Whether it\'s your first wash or your hundredth, you\'ll get the same JSA finish, that\'s the reliability our regulars stick with.'
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
          <path d="M11 8a3 3 0 0 1 3 3"/>
        </svg>
      ),
      title: 'Detail you don\'t have to second-guess',
      description: 'Every job ends with a walk-around before we leave. If anything\'s not right, we re-do it on the spot, so you never need to inspect twice.'
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Around your dispatch, not ours',
      description: 'After-hours, weekends, depot windows, on-site at remote yards. We work when it suits you so a clean rig never costs you a load.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroBg} alt="Fleet Washing" className="hero-background" />
        <div className="hero-overlay"></div>
        <div className="section-container hero-top-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot">●</span>
              <span className="hero-badge-text">15% off new bookings</span>
            </div>
            <h1 className="hero-title">
              We come to you<span className="or-text">or</span>you come to us
            </h1>
            <p className="hero-description">
              Premium detailing for trucks, cars, heavy machinery and fleets of any size, across Melbourne.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4" stroke="#14181c" strokeWidth="2" fill="none"/>
                </svg>
                <span>Mobile or in-house at our Epping yard</span>
              </div>
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4" stroke="#14181c" strokeWidth="2" fill="none"/>
                </svg>
                <span>Available 7 days, based on bookings</span>
              </div>
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4" stroke="#14181c" strokeWidth="2" fill="none"/>
                </svg>
                <span>Fleet discounts up to 25%</span>
              </div>
            </div>

            <div className="hero-cta">
              <Link to="/quote" className="btn-primary">Build my program →</Link>
              <a href="tel:0415275751" className="btn-secondary">Or call 0415 275 751</a>
            </div>
            <p className="hero-urgency">
              <span className="pulse-dot"></span>
              Weekly slots fill fast, book your spot before Friday.
            </p>
          </div>

          {/* Signature element: dispatch ticket */}
          <div className="hero-ticket">
            <div className="hero-ticket-head">
              <span>JSA JOB TICKET</span>
              <span className="hero-ticket-id">#JSA-0417</span>
            </div>
            <div className="hero-ticket-status">
              <span className="dot"></span>
              <span>Open for bookings</span>
            </div>
            <div className="hero-ticket-rows">
              <div className="hero-ticket-row">
                <span>SERVICE AREA</span>
                <span>Melbourne metro</span>
              </div>
              <div className="hero-ticket-row">
                <span>LOCATION</span>
                <span>Mobile or Epping yard</span>
              </div>
              <div className="hero-ticket-row">
                <span>TURNAROUND</span>
                <span>Same-day available</span>
              </div>
              <div className="hero-ticket-row">
                <span>GUARANTEE</span>
                <span>Free re-wash, on the spot</span>
              </div>
            </div>
            <div className="hero-ticket-rating">
              <div>
                <span className="stars">★★★★★</span>
              </div>
              <span className="count">5.0 · 73+ Google reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews strip, overlapping the bottom of the hero image */}
        <div className="hero-reviews-strip">
          <div className="hero-reviews-track">
            {testimonials.map((t, i) => (
              <div key={i} className="hero-review-card">
                <div className="hero-review-header">
                  <div className="hero-review-avatar">{t.initial}</div>
                  <div className="hero-review-info">
                    <div className="hero-review-name">
                      {t.name}
                      {t.verified && <span className="verified-badge">✓</span>}
                    </div>
                    <div className="hero-review-meta">
                      <span className="hero-review-stars">{'★'.repeat(t.rating)}</span>
                      <span>{t.date}</span>
                    </div>
                  </div>
                </div>
                {t.image && (
                  <div className="hero-review-image">
                    <img src={t.image} alt="Customer review" />
                  </div>
                )}
                <p className="hero-review-text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live activity + quote bar */}
        <div className="hero-bottom-bar">
          <div className="hero-bottom-live">
            <span className="pulse-dot"></span>
            <span className="hero-bottom-live-label">Live</span>
            <span className="hero-bottom-sep">·</span>
            <span>Trailer wash booked 1h ago</span>
          </div>
          <Link to="/quote" className="hero-bottom-cta">
            Click here for your free quote →
          </Link>
          <a href="tel:0415275751" className="hero-bottom-phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Or call 0415 275 751
          </a>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="section-container trust-strip-grid">
          <div className="trust-item">
            <span className="trust-number">500+</span>
            <span className="trust-label">Rigs washed</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">8+</span>
            <span className="trust-label">Years on the tools</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">5.0</span>
            <span className="trust-label">73+ Google reviews</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">100%</span>
            <span className="trust-label">Re-wash guarantee</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="testimonials-header">
            <h2>Trusted by operators across the region</h2>
            <div className="google-rating">
              <span className="google-icon">G</span>
              <span className="rating-text">5.0</span>
              <span className="rating-stars">★★★★★</span>
              <span className="rating-count">73+ Google reviews</span>
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.initial}</div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">
                      {testimonial.name}
                      {testimonial.verified && <span className="verified-badge">✓</span>}
                    </div>
                    <div className="testimonial-date">{testimonial.date}</div>
                  </div>
                </div>
                <div className="testimonial-rating">{'★'.repeat(testimonial.rating)}</div>
                <p className="testimonial-text">{testimonial.text}</p>
                {testimonial.image && (
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt="Customer review" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <div className="services-header">
            <span className="section-badge">● WHAT WE WASH</span>
            <h2>
              Built for working trucks <span className="blue-text">and showroom finishes.</span>
            </h2>
            <p>
              Six core services. One crew that lives and breathes heavy vehicles. Pick what you need, mix and match, or hand us your fleet and we'll build the program around your dispatch.
            </p>
            <Link to="/services" className="btn-secondary">
              See all packages →
            </Link>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-number">{service.code}</div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-badge">
                    <span className={service.badgeClass}>
                      {service.badge ? service.badge : '● LIVE'}
                    </span>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-section">
        <div className="section-container">
          <div className="why-header">
            <span className="section-badge">● WHY OPERATORS STAY</span>
            <h2>Run by a guy who actually answers his phone.</h2>
            <p>
              Jaye and Steele are the owners and operators, both still on the tools every day. Every truck gets the attention it would be if it were ours, because that's how we treat each one.
            </p>
          </div>
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <div className="process-header">
            <span className="section-badge">● HOW IT WORKS</span>
            <h2>Three steps. No back-and-forth.</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="process-step-num">01</span>
              <h3>Book your slot</h3>
              <p>Text, call, or fill in the quote form. Tell us the rig and where it's parked.</p>
            </div>
            <div className="process-step">
              <span className="process-step-num">02</span>
              <h3>We show up, or you do</h3>
              <p>Mobile at your depot or drop in at our Epping yard, whatever suits your dispatch.</p>
            </div>
            <div className="process-step">
              <span className="process-step-num">03</span>
              <h3>Walk-around sign-off</h3>
              <p>We inspect together before we leave. Anything missed gets fixed on the spot, free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div>
            <h2>Ready to get your fleet clean?</h2>
            <p>Save up to 20% with a recurring schedule. Weekly, fortnightly or monthly. One invoice. No surprises.</p>
          </div>
          <div className="cta-buttons-wrap">
            <div className="cta-buttons">
              <Link to="/quote" className="btn-white">
                Build my program →
              </Link>
              <a href="tel:0415275751" className="btn-outline">
                Or call 0415 275 751
              </a>
            </div>
            <p className="cta-trust">Fully insured · Same-day availability · Pay after the job's done</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
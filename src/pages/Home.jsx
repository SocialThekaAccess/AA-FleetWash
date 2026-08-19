import { Link } from 'react-router-dom';
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
import './Home.css';

function Home() {
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
        <div className="aa-hero__field" aria-hidden="true" />
        <div className="aa-hero__glow aa-hero__glow--one" aria-hidden="true" />
        <div className="aa-hero__glow aa-hero__glow--two" aria-hidden="true" />

        <div className="aa-shell aa-hero__layout">
          <div className="aa-hero__copy">
            <div className="aa-eyebrow">
              <span className="aa-eyebrow__dot" />
              Melbourne · Mobile + Epping Yard
            </div>

         <h1 className="aa-hero__title">
  Trucks work hard we finish
  <br />
  the job properly
</h1>
            <p className="aa-hero__lead">
              Premium truck, fleet and heavy machinery detailing, built around your dispatch — on-site
              anywhere across Melbourne, or at our Epping yard.
            </p>

            <div className="aa-hero__actions">
              <Link to="/quote" className="aa-btn aa-btn--brass">
                Get a free quote
                <i aria-hidden="true">↗</i>
              </Link>
              <a href="tel:0415275751" className="aa-hero__call">
                <span className="aa-hero__call-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>
                  <small>Talk to the crew</small>
                  <strong>0415 275 751</strong>
                </span>
              </a>
            </div>

            <div className="aa-hero__stats">
              <div>
                <strong>5.0</strong>
                <span>★★★★★</span>
                <small>73+ reviews</small>
              </div>
              <div>
                <strong>300+</strong>
                <small>vehicles detailed</small>
              </div>
              <div>
                <strong>8+</strong>
                <small>years on the tools</small>
              </div>
            </div>
          </div>

          {/* Signature element: the riveted service plate */}
          <div className="aa-hero__visual">
            <div className="aa-plate">
              <span className="aa-plate__rivet aa-plate__rivet--tl" />
              <span className="aa-plate__rivet aa-plate__rivet--tr" />
              <span className="aa-plate__rivet aa-plate__rivet--bl" />
              <span className="aa-plate__rivet aa-plate__rivet--br" />
              <div className="aa-plate__frame">
                <img src={redTruck2} alt="AA Fleet Wash premium truck detailing" />
                <div className="aa-plate__shade" />
                <div className="aa-plate__label">
                  <span>AA FLEET WASH · No. 0417</span>
                  <strong>Service class: Premium</strong>
                </div>
              </div>
            </div>

            <div className="aa-medallion">
              <span>First booking</span>
              <strong>15% off</strong>
              <small>Limited weekly slots</small>
            </div>

            <div className="aa-tag">
              <span className="aa-tag__live">
                <i aria-hidden="true" />
                Bookings open
              </span>
              <strong>7 days</strong>
              <small>By appointment</small>
            </div>
          </div>
        </div>

        <div className="aa-shell aa-hero__rail">
          <div>
            <span>Mobile wash</span>
            <strong>We come to your depot</strong>
          </div>
          <div>
            <span>Epping yard</span>
            <strong>Drop in by booking</strong>
          </div>
          <div>
            <span>Fleet programs</span>
            <strong>Recurring schedules</strong>
          </div>
          <div>
            <span>Re-wash promise</span>
            <strong>Fixed on the spot, free</strong>
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
          <div className="aa-proof__metric">
            <small>Google</small>
            <strong>5.0</strong>
            <span>73+ customer reviews</span>
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
                Built for working rigs.<span>Finished like show trucks.</span>
              </h2>
            </div>
            <div className="aa-section-head__aside">
              <p>
                Six core services, one experienced crew. Choose a single detail or let us build a
                recurring fleet program around your dispatch.
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
                    ↗
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
              Premium standards.<span>Operator-level care.</span>
            </h2>
            <p>
              The owners are still on the tools. That means clear communication, consistent
              workmanship and a proper sign-off before the job is called done.
            </p>
            <a href="tel:0415275751" className="aa-link aa-link--light">
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

      {/* ============ REVIEWS ============ */}
      <section className="aa-reviews">
        <div className="aa-shell">
          <div className="aa-section-head aa-section-head--reviews">
            <div>
              <div className="aa-eyebrow aa-eyebrow--dark">
                <span className="aa-eyebrow__dot" />
                Customer proof
              </div>
              <h2>
                Clean work Real operators
              </h2>
            </div>
            <div className="aa-reviews__rating">
              <strong>5.0</strong>
              <span>★★★★★</span>
              <small>73+ Google reviews</small>
            </div>
          </div>

          <div className="aa-reviews__viewport">
            <div className="aa-reviews__track">
              {[...testimonials, ...testimonials].map((review, index) => (
                <article className="aa-review-card" key={`${review.name}-${index}`}>
                  <div className="aa-review-card__image">
                    <img src={review.image} alt="Fleet wash customer result" />
                  </div>
                  <div className="aa-review-card__body">
                    <div className="aa-review-card__stars">{'★'.repeat(review.rating)}</div>
                    <p>“{review.text}”</p>
                    <div className="aa-review-card__person">
                      <span className="aa-review-card__avatar">{review.initial}</span>
                      <div>
                        <strong>
                          {review.name} {review.verified && <i>✓</i>}
                        </strong>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
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
                Keep the fleet clean.<span>Keep the fleet moving.</span>
              </h2>
              <p>Weekly, fortnightly or monthly scheduling. One crew, one standard, one simple invoice.</p>
            </div>
            <div className="aa-cta__actions">
              <Link to="/quote" className="aa-btn aa-btn--brass">
                Build my program <i aria-hidden="true">↗</i>
              </Link>
              <a href="tel:0415275751" className="aa-btn aa-btn--ghost">
                Call 0415 275 751
              </a>
              <small>Fully insured · Same-day availability · Pay after the job</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
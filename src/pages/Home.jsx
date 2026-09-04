import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import logo from '../assets/AA-FleetWash.png';
import blueTruck from '../assets/BlueTruck.png';
import truckWashImage from '../assets/TruckWash.png';
import whiteTruck1 from '../assets/TruckWhite1.png';
import engineBayClean1 from '../assets/EngineBayClean.jpeg';
import kenworthSideProfile from '../assets/kenworthsideprofile.png';
import fleetWashingProgram from '../assets/FLEETWASHINGPROGRAM.png';
import heavyMachine3 from '../assets/HeavyMachine3.png';
import crane1Img from '../assets/Crane1Img.png';
import heavyMachine1 from '../assets/HeavyMachine1.png';
import redTruck1 from '../assets/RedTruck1.png';
import homePageBG from '../assets/HomePageBG.png';
import minoTruck2 from '../assets/MinoTruck2.png';
import wheelAfter from '../assets/truck-wheelAfter.jpg';
import wheelBefore from '../assets/truck-wheelBefore.jpg';
import video1 from '../assets/AA REEL 1.mp4';
import video2 from '../assets/AA REEL 2 V2.mp4';
import video3 from '../assets/AA REEL 3 V2.mp4';
import './Home.css';

function Home() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeThumb, setActiveThumb] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const formRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleScrollIndicatorClick = () => {
    if (formRef.current) {
      formRef.current.scrollBy({
        top: 200,
        behavior: 'smooth'
      });
      setShowScrollIndicator(false);
    }
  };

  const handleFormScroll = (e) => {
    const element = e.target;
    const isAtBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
    if (isAtBottom) {
      setShowScrollIndicator(false);
    }
  };

  const gallery = [
    { src: truckWashImage, alt: 'Truck wash in progress' },
    { src: blueTruck, alt: 'Clean truck after wash' }
  ];

  const services = [
    {
      code: '01',
      tag: 'TW',
      image: truckWashImage,
      title: 'Exterior Truck Wash',
      description: 'Professional exterior detailing bringing back the showroom shine. Deep cleaning every panel, rim and surface.',
      badge: 'MOST BOOKED'
    },
    {
      code: '02',
      tag: 'ID',
      image: whiteTruck1,
      title: 'Interior Truck Wash',
      description: 'Complete cab interior detailing - leather seats, dashboard, steering wheel and every corner steam cleaned and restored.'
    },
    {
      code: '03',
      tag: 'EB',
      image: engineBayClean1,
      title: 'Engine Bay Clean',
      description: 'Professional engine bay degreasing and detailing. Every component cleaned, dressed and protected without damaging electricals.'
    },
    {
      code: '04',
      tag: 'WP',
      image: kenworthSideProfile,
      title: 'Wax & Paint Protection',
      description: 'Premium paint correction and protection treatment. Mirror-finish detailing that keeps your rig looking sharp for months.'
    },
    {
      code: '05',
      tag: 'FP',
      image: fleetWashingProgram,
      title: 'Fleet Washing Program',
      description: 'Complete fleet maintenance program. Keep your entire fleet consistently clean and professional-looking year-round.'
    },
    {
      code: '06',
      tag: 'HM',
      image: heavyMachine3,
      title: 'Heavy Machinery Wash',
      description: 'Specialized cleaning for excavators, loaders and construction equipment. Hot-water pressure washing removes site grime safely.'
    },
    {
      code: '07',
      tag: 'FM',
      image: crane1Img,
      title: 'Farm Machinery Wash',
      description: 'Professional cleaning for tractors, harvesters and agricultural equipment. Field-ready results without damaging sensitive components.'
    },
    {
      code: '08',
      tag: 'CE',
      image: heavyMachine1,
      title: 'Construction Equipment',
      description: 'Complete detailing for construction machinery and earthmoving equipment. Deep clean that removes mud, concrete and heavy debris.'
    },
    {
      code: '09',
      tag: 'PR',
      image: redTruck1,
      title: 'Prime Mover Detailing',
      description: 'Premium detailing service for prime movers. Complete wash, polish and protection treatment for show-quality finish.'
    }
  ];

  const testimonials = [
    {
      name: 'Sukhjinder Singh',
      initial: 'SS',
      date: '1 month ago',
      text: 'Absolutely top-notch truck wash. Cleaned every inch, inside and out, hard-to-reach spots included.'
    },
    {
      name: 'Kyri Petroudas',
      initial: 'KP',
      date: '3 weeks ago',
      text: 'Called on short notice, Mani booked me straight in and did an amazing job on the truck and trailers.'
    },
    {
      name: 'Joseph Ruffo',
      initial: 'JR',
      date: '2 months ago',
      text: 'A pleasure doing business with them, always punctual, and the detailing is brilliant.'
    },
    {
      name: 'Brett Bugeja',
      initial: 'BB',
      date: '10 months ago',
      text: 'Brought my machinery back to life and ready to sell. Nothing missed, came on site as agreed.'
    },
    {
      name: 'Michael Chen',
      initial: 'MC',
      date: '4 months ago',
      text: 'The fleet program has been outstanding, same quality every wash, and they work around dispatch.'
    },
    {
      name: 'Sarah Mitchell',
      initial: 'SM',
      date: '8 months ago',
      text: 'Professional start to finish. The walk-around inspection before they left was a nice touch.'
    }
  ];

  const whyChoose = [
    {
      num: '01',
      title: '5+ years in the business',
      description: 'Mani has been around trucks long enough to know what aluminium needs, what paint can take, and what a hot wash will do to a wrap.'
    },
    {
      num: '02',
      title: 'Same crew, same standard',
      description: 'No rotating subbies. Whether it\'s your first wash or your hundredth, you get the same finish every time.'
    },
    {
      num: '03',
      title: 'Sign-off before we leave',
      description: 'Every job ends with a walk-around. If anything isn\'t right, we redo it on the spot, no callback needed.'
    },
    {
      num: '04',
      title: 'Built around your dispatch',
      description: 'After-hours, weekends, at your depot or job site. A clean rig should never cost you a load.'
    }
  ];

  const process = [
    { num: '01', title: 'Book your slot', description: 'Call, text or use the docket form. Tell us what you drive and where it\'s parked.' },
    { num: '02', title: 'We come to you', description: 'Fully mobile service, we bring everything to your location. No need to move your rig.' },
    { num: '03', title: 'Walk-around sign-off', description: 'We inspect the result together. Anything missed gets fixed on the spot, free.' }
  ];

  const handleSliderMove = (e) => {
    const val = Number(e.target.value);
    setSliderPos(val);
  };

  return (
    <main className="aa-home">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${homePageBG})` }} />
        <div className="hero-scrim" />
        <div className="hero-grid" />

        <div className="hero-shell">
          <div className="hero-copy">
            {/* <div className="docket-tag">
              <span className="docket-tag__dot" />
              JOB SHEET NO. AA-2026
            </div> */}  
            <h1>
              Clean Fleet, <span>Happy Fleet</span>
            </h1>
            <p>
              Mobile onsite truck washing for operators who can't afford downtime.
              Prime movers, trailers, tippers and reefers, cleaned properly, signed off
              before we go.
            </p>

            <div className="hero-bottom">
              <div className="hero-actions">
                <Link to="/quote" className="btn-plate">
                  Get a free quote <i>→</i>
                </Link>
                <Link to="/services" className="btn-outline">
                  See the services
                </Link>
              </div>

              <div className="hero-strip">
                <div className="hero-strip__item">
                  <strong>300+</strong>
                  <span>fleets serviced</span>
                </div>
                <div className="hero-strip__item">
                  <strong>5+ years</strong>
                  <span>in the business</span>
                </div>
                <div className="hero-strip__item">
                  <strong>5.0</strong>
                  <span>from 73+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* JOB DOCKET FORM */}
          <div 
            className={`docket-card ${!showScrollIndicator ? 'scrolled-bottom' : ''}`} 
            id="quote"
            ref={formRef}
            onScroll={handleFormScroll}
          >
            <img src={logo} alt="AA Fleet Wash" className="docket-card__logo" />
            <span className="docket-card__clip" aria-hidden="true" />
            
            <div className="docket-card__head">
              <span>REQUEST A QUOTE</span>
              <h2>Tell us about the job</h2>
            </div>

            <form id="quoteForm">
              <div className="field">
                <input type="text" placeholder="Your full name" required />
                <label>Full name</label>
              </div>

              <div className="field">
                <input type="text" placeholder="Company / business name" />
                <label>Company</label>
              </div>

              <div className="field-row">
                <div className="field">
                  <input type="tel" placeholder="04xx xxx xxx" required />
                  <label>Phone</label>
                </div>
                <div className="field">
                  <input type="email" placeholder="you@company.com" required />
                  <label>Email</label>
                </div>
              </div>

              <div className="field field--no-label">
                <select required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Truck washing</option>
                  <option>Fleet washing</option>
                  <option>Trailer washing</option>
                  <option>Commercial vehicle washing</option>
                </select>
              </div>

              <div className="field">
                <textarea placeholder="What are we washing, and where's it parked?" />
                <label>Fleet / vehicle details</label>
              </div>

              <button type="submit" className="docket-submit">
                GET YOUR FREE QUOTE
              </button>

              <p className="docket-fine">
                Your details are only used to respond to this enquiry. <a href="#">Privacy policy</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ============ SIGNATURE: BEFORE / AFTER ============ */}
      <section className="reveal">
        <div className="shell reveal__layout">
          <div className="reveal__copy">
            <div className="docket-tag docket-tag--dark">
              <span className="docket-tag__dot" />
              THE DIFFERENCE
            </div>
            <h2>
              Same wheel.<span>Five minutes apart.</span>
            </h2>
            <p>
              Road film, brake dust and diesel grime build up fast on a working rig.
              Drag the slider, this is what a proper two-bucket wash and rim detail
              actually does, not just what it looks like from a distance.
            </p>
            <a href="tel:+61489225500" className="reveal__link">
              Ask what your rig needs <i>↗</i>
            </a>
          </div>

          <div className="reveal__frame">
            <div className="reveal__images" style={{ '--pos': `${sliderPos}%` }}>
              <img src={wheelBefore} alt="Truck wheel before wash" className="reveal__img reveal__img--before" />
              <img src={wheelAfter} alt="Truck wheel after wash" className="reveal__img reveal__img--after" />
              <div className="reveal__edge" />
              <span className="reveal__label reveal__label--before">BEFORE</span>
              <span className="reveal__label reveal__label--after">AFTER</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderMove}
              className="reveal__slider"
              aria-label="Drag to compare before and after"
            />
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="services">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="docket-tag docket-tag--dark">
                <span className="docket-tag__dot" />
                THE WORK ORDER
              </div>
              <h2>
                Five services.<span>One standard.</span>
              </h2>
            </div>
            <div className="section-head__aside">
              <p>
                Book a single detail or set up a recurring program built around your
                dispatch board. Same crew turns up either way.
              </p>
              <Link to="/services" className="text-link">
                Explore all services <i>↗</i>
              </Link>
            </div>
          </div>

          <div className="services__grid">
            {services.map((service) => (
              <div className="service-card" key={service.code}>
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card__overlay">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="service-card__title">
                  <div className="service-card__title-text">
                    <h3>{service.title}</h3>
                  </div>
                  <a href="tel:+61489225500" className="service-card__call" onClick={(e) => e.stopPropagation()}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VIDEO REEL ============ */}
      <section className="reel">
        <div className="shell reel__head">
          <div className="docket-tag">
            <span className="docket-tag__dot" />
            ON SITE
          </div>
          <h2>Real trucks Real results </h2>
        </div>

        <div className="reel__track">
          <div className="reel__card">
            <video autoPlay loop muted playsInline>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div className="reel__card">
            <video autoPlay loop muted playsInline>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div className="reel__card">
            <video autoPlay loop muted playsInline>
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="why">
        <div className="shell why__layout">
          <div className="why__intro">
            <div className="docket-tag docket-tag--dark">
              <span className="docket-tag__dot" />
              WHY OPERATORS STAY
            </div>
            <h2>
              Owners on the tools.<span>Every single job.</span>
            </h2>
            <p>
              That means clear communication, consistent workmanship, and a proper
              sign-off before we call anything done.
            </p>
            <a href="tel:+61489225500" className="text-link">
              Speak directly with the crew <i>↗</i>
            </a>
          </div>

          <div className="why__list">
            {whyChoose.map((item) => (
              <article className="why-row" key={item.title}>
                <span className="why-row__num">{item.num}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED SERVICE ============ */}
      <section className="feature">
        <div className="shell feature__layout">
          <div className="feature__gallery">
            <div className="feature__main">
              <img src={gallery[activeThumb].src} alt={gallery[activeThumb].alt} />
              <span className="feature__pill">MOST BOOKED</span>
            </div>
            <div className="feature__thumbs">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  className={`feature__thumb ${activeThumb === index ? 'is-active' : ''}`}
                  onClick={() => setActiveThumb(index)}
                  aria-label={image.alt}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
              ))}
            </div>
          </div>

          <div className="feature__content">
            <div className="docket-tag docket-tag--dark">
              <span className="docket-tag__dot" />
              CAB FIT FOR A LONG HAUL
            </div>
            <h2>Exterior truck wash</h2>
            <p>
              Two-bucket safe wash on cabs, trailers, tankers, tippers and reefers.
              We lift road salt, brake dust and grime without etching paint or aluminium.
            </p>

            <ul className="feature__specs">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>pH-balanced foam</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>Soft-touch mitts, no swirl marks</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>Wheel & rim detail included</li>
            </ul>

            <div className="feature__time">
              <span>TYPICAL TIME</span>
              <strong>60 to 90 min</strong>
            </div>

            <div className="feature__actions">
              <Link to="/quote" className="btn-plate">Book this <i>→</i></Link>
              <a href="tel:+61489225500" className="btn-outline btn-outline--dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call for a free quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="faq-section">
        <div className="shell">
          <div className="section-head section-head--center">
            <div className="docket-tag">
              <span className="docket-tag__dot" />
              COMMON QUESTIONS
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our fleet washing services</p>
          </div>

          <div className="faq-grid">
            {[
              {
                q: 'How long does a typical truck wash take?',
                a: 'A standard exterior wash takes 60-90 minutes depending on the vehicle size and condition. Prime mover details can take 2-3 hours for a complete job.'
              },
              {
                q: 'Do you come to our depot or do we come to you?',
                a: 'We come to you! 100% mobile service at your depot, yard, job site, or rest stops. We bring all water, power, and equipment. No need to move your vehicles.'
              },
              {
                q: 'What products do you use? Are they safe?',
                a: 'We use pH-balanced, biodegradable cleaning solutions that are safe for all paint types, vinyl wraps, and aluminium. No harsh chemicals that damage your rig.'
              },
              {
                q: 'Can you wash refrigerated trailers and tankers?',
                a: 'Yes, we clean reefers, tankers, tippers, dog trailers, and all commercial vehicles. We use food-grade safe products for tankers that carry consumables.'
              },
              {
                q: 'Do you offer fleet washing programs?',
                a: 'Absolutely. We build recurring wash schedules around your dispatch - weekly, fortnightly, or monthly. One simple invoice, same crew every time.'
              },
              {
                q: 'What if I\'m not happy with the wash?',
                a: 'Every job ends with a walk-around inspection. If anything is missed, we fix it on the spot at no charge. We also offer a 100% re-wash guarantee.'
              },
              {
                q: 'How do I get a quote?',
                a: 'Fill out the quote form above, call us at +61 489 225 500, or text us your vehicle details. We usually respond same day with pricing.'
              },
              {
                q: 'Do you work after hours or weekends?',
                a: 'Yes. We know trucks don\'t stop for 9-5 hours. We work early mornings, late nights, and weekends to fit your operation schedule.'
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFAQ === index ? 'is-open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="process">
        <div className="shell">
          <div className="section-head section-head--center">
            <div className="docket-tag">
              <span className="docket-tag__dot" />
              HOW IT WORKS
            </div>
            <h2>Three steps No runaround</h2>
          </div>

          <div className="process__grid">
            {process.map((step, i) => (
              <article className="process-card" key={step.num}>
                <span className="process-card__num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {i < process.length - 1 && <span className="process-card__connector" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta">
        <div className="shell">
          <div className="cta__panel">
            <span className="plate__rivet plate__rivet--tl" />
            <span className="plate__rivet plate__rivet--tr" />
            <span className="plate__rivet plate__rivet--bl" />
            <span className="plate__rivet plate__rivet--br" />
            <div className="cta__copy">
              <div className="docket-tag">
                <span className="docket-tag__dot" />
                FLEET PROGRAMS
              </div>
              <h2>
                Keep the fleet clean.<span>Keep the fleet moving.</span>
              </h2>
              <p>Weekly, fortnightly or monthly scheduling. One crew, one standard, one simple invoice.</p>
            </div>
            <div className="cta__actions">
              <Link to="/quote" className="btn-plate">
                Build my program <i>↗</i>
              </Link>
              <a href="tel:+61489225500" className="btn-outline">
                Call +61 489 225 500
              </a>
              <small>Fully insured · Same-day availability · Pay after the job</small>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHATSAPP FLOATING BUTTON ============ */}
      <a
        href="https://wa.me/61489225500"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  );
}

export default Home;
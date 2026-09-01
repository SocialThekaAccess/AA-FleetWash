import truck1 from '../assets/Truck1.png';
import truck2 from '../assets/Truck2.png';
import redTruck from '../assets/RedTruck1.png';
import kenworthimg from '../assets/kenworthsideprofile.png';
import heavyMachinary from '../assets/HeavyMachine4.png';
import './SharedPages.css';

function About() {
  return (
    <div className="about-page-modern">
      {/* Hero Section with Background */}
      <section className="about-hero about-hero--bg">
        <div className="about-hero__bg">
          <img src={kenworthimg} alt="AA Fleet Wash Trucks" />
          <div className="about-hero__overlay" />
        </div>

        <div className="section-container">
          <div className="about-hero-content">
            <span className="section-badge">● ABOUT AA FLEET WASH</span>
            <h1>We're not the cheapest <br/> We're the most thorough </h1>
            <p className="hero-subtitle">
              8+ years washing trucks that earn their keep. Owner-operated, same crew, same standards, whether it's your first wash or your hundredth.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-image">
              <img src={truck1} alt="AA Fleet Wash" />
            </div>
            <div className="story-content">
              <span className="section-badge">● WHO WE ARE</span>
              <h2>Built by operators, for operators.</h2>
              <p>
                AA Fleet Wash started because we got sick of watching detailers treat prime movers like they're washing a Camry. Aluminum needs care. Paint needs pH-balanced foam. Vinyl wraps can't take scorching hot water.
              </p>
              <p>
                Mani has been around trucks long enough to know what works and what wrecks resale value. Still on the tools every day, so every rig gets the attention it would if it were his own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="section-container">
          <div className="values-header">
            <span className="section-badge">● WHAT WE STAND FOR</span>
            <h2>No shortcuts. No surprises. No re-wash fees.</h2>
          </div>
          <div className="values-grid-modern">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Same crew, every job</h3>
              <p>You won't get a random subcontractor. It's us. Same standards, same finish, whether it's job one or job hundred.</p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>Fixed pricing upfront</h3>
              <p>Send a photo + postcode. We quote within 7 minutes. No hidden fees, no upsells once we're on site.</p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Walk-around sign-off</h3>
              <p>We don't leave until you've inspected. Anything missed gets fixed on the spot, free. That's the guarantee.</p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3>Around your dispatch</h3>
              <p>After-hours, weekends, at your depot or job site. We work when it suits you, so a clean rig never costs you a load.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Stats Section */}
      <section className="about-proof">
        <div className="section-container">
          <div className="proof-grid">
            <div className="proof-content">
              <span className="section-badge">● THE NUMBERS</span>
              <h2>500+ rigs washed. Zero complaints about missed spots.</h2>
              <div className="stats-list">
                <div className="stat-item">
                  <div className="stat-number">5+ years</div>
                  <div className="stat-label">In the business</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5.0 ★★★★★</div>
                  <div className="stat-label">73+ Google reviews</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Free re-wash guarantee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">7 days</div>
                  <div className="stat-label">Available based on bookings</div>
                </div>
              </div>
            </div>
            <div className="proof-image">
              <img src={redTruck} alt="Clean Truck" />
            </div>
          </div>
        </div>
      </section>

      {/* Heavy Machinery Section - NEW SEXY SECTION */}
      <section className="about-machinery">
        <div className="section-container">
          <div className="machinery-grid">
            <div className="machinery-image">
              <img src={heavyMachinary} alt="Heavy Machinery Washing Service" />
            </div>
            <div className="machinery-content">
              <span className="section-badge">● BEYOND TRUCKS</span>
              <h2>We wash what others won't touch.</h2>
              <p>
                Cranes, excavators, loaders, tippers, if it moves dirt or lifts weight, we know how to clean it properly. Construction equipment needs the same care as road trucks.
              </p>
              <ul className="machinery-features">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Degreasing for hydraulics & undercarriage
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Safe on decals, paint & powder coat
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Ready for resale or back to the job
                </li>
              </ul>
              <a href="/quote" className="btn-primary-modern">Get a machinery quote →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta">
        <div className="section-container">
          <div className="cta-box">
            <h2>Book your first wash. If we miss a spot, we re-do it free.</h2>
            <p>Most quotes go out within 7 minutes. Same-day availability if you need it.</p>
            <div className="cta-buttons">
              <a href="/quote" className="btn-primary-modern">Build my program →</a>
              <a href="tel:+61489225500" className="btn-secondary-modern">Or call +61 489 225 500</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

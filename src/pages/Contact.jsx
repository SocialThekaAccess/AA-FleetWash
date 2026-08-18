import './SharedPages.css';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="section-container">
          <div className="breadcrumb">
            <a href="/">Home</a> / <span>Contact</span>
          </div>
          
          <div className="contact-hero-content">
            <span className="section-badge">● CONTACT</span>
            <h1>
              Two minutes to a quote. <span className="blue-highlight">Fixed price upfront.</span>
            </h1>
            <p className="hero-description">
              Pick whichever way is easiest, phone, text a photo, fill the form, or roll into our Epping yard. Most quotes go out within 7 minutes during the day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods + Form Section */}
      <section className="contact-main">
        <div className="section-container">
          <div className="contact-layout">
            {/* Left Side - Contact Methods */}
            <div className="contact-methods">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">PHONE · FASTEST</div>
                  <div className="contact-card-value">0415 275 751</div>
                </div>
                <a href="tel:0415275751" className="contact-card-btn">Call now →</a>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">SMS / WHATSAPP</div>
                  <div className="contact-card-value">Text us a photo · 0415 275 751</div>
                </div>
                <a href="sms:0415275751" className="contact-card-btn">Send a text →</a>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">EMAIL</div>
                  <div className="contact-card-value">contact@aafleetwash.com</div>
                </div>
                <a href="mailto:contact@aafleetwash.com" className="contact-card-btn">Email us →</a>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">YARD</div>
                  <div className="contact-card-value">55 Produce Dr, Epping VIC 3076</div>
                </div>
                <a href="https://maps.google.com/?q=55+Produce+Dr+Epping+VIC+3076" target="_blank" rel="noopener noreferrer" className="contact-card-btn">Get directions →</a>
              </div>

              <div className="contact-info-grid">
                <div className="info-item">
                  <div className="info-label">HOURS</div>
                  <div className="info-value">On request, 24 hours, 7 days</div>
                </div>
                <div className="info-item">
                  <div className="info-label">SERVICE AREA</div>
                  <div className="info-value">Greater Melbourne & Regional Victoria</div>
                </div>
              </div>

              {/* Map */}
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.123456789!2d145.0!3d-37.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM5JzAwLjAiUyAxNDXCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AA Fleet Wash Location"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <span className="section-badge">● SEND A QUOTE REQUEST</span>
                <h2>Tell us what you're running.</h2>
                <p>Quote within 24 hours. We'll come back with a fixed price and a slot, no surprises.</p>
              </div>

              <form className="quote-form-contact">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="Email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType">Would you prefer that we come to your location, or would you like to drop your vehicle off at ours?</label>
                  <select id="serviceType" name="serviceType" required>
                    <option value="">Please select</option>
                    <option value="mobile">Mobile service - We come to you</option>
                    <option value="dropoff">Drop-off at Epping yard</option>
                    <option value="either">Either works for me</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="details">Enter details about services required (i.e. vehicle/equipment cleaning) and company name</label>
                  <textarea id="details" name="details" rows="4" placeholder="Tell us about your fleet, equipment type, and any specific requirements..."></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <input type="checkbox" id="consent" name="consent" />
                  <label htmlFor="consent">
                    By checking this box, I consent to receive service-related and promotional text messages from AA Fleet Wash at the phone number provided. Message frequency may vary, and message/data rates may apply. Reply HELP for assistance or STOP to opt out.
                  </label>
                </div>

                <button type="submit" className="btn-submit-contact">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="contact-trust-banner">
        <div className="section-container">
          <div className="trust-banner-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>Not happy with the result? <strong>We rewash for free, no questions.</strong></span>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="contact-trust-features">
        <div className="section-container">
          <div className="trust-features-grid">
            <div className="trust-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <div>
                <h3>Public liability insured</h3>
                <p>Certificate of currency available on request before we step on your site.</p>
              </div>
            </div>

            <div className="trust-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <div>
                <h3>Fixed-price quotes</h3>
                <p>Send a photo + postcode. We come back with a fixed price, no surprises.</p>
              </div>
            </div>

            <div className="trust-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <div>
                <h3>Same-week availability</h3>
                <p>Most jobs booked within 24 hours. After-hours and weekends OK.</p>
              </div>
            </div>
          </div>

          <div className="services-link">
            <a href="/services">See all services →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

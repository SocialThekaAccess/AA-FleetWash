import './SharedPages.css';

function Quote() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="hero-badge">GET A QUOTE</div>
          <h1>Let's Get Your Fleet Clean</h1>
          <p>Free quotes for all services — no obligation</p>
        </div>
      </section>

      <section className="page-content">
        <div className="section-container">
          <div className="quote-container">
            <div className="quote-intro">
              <h2>Request Your Free Quote</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your specific needs.</p>
            </div>

            <form className="quote-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" name="company" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="vehicle-type">Vehicle / Equipment Type *</label>
                  <select id="vehicle-type" name="vehicle-type" required>
                    <option value="">Select type...</option>
                    <option value="car-suv">Car / SUV</option>
                    <option value="truck">Commercial Truck</option>
                    <option value="trailer">Trailer / Container</option>
                    <option value="crane">Crane</option>
                    <option value="bulldozer">Bulldozer</option>
                    <option value="excavator">Excavator</option>
                    <option value="heavy-machinery">Other Heavy Machinery</option>
                    <option value="fleet">Fleet (Multiple Vehicles)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="vehicle-count">Number of Vehicles</label>
                  <input type="number" id="vehicle-count" name="vehicle-count" min="1" defaultValue="1" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Location / Service Area</label>
                  <input type="text" id="location" name="location" placeholder="City or zip code" />
                </div>
                <div className="form-group">
                  <label htmlFor="service-type">Preferred Service *</label>
                  <select id="service-type" name="service-type" required>
                    <option value="">Select service...</option>
                    <option value="one-time">One-Time Cleaning</option>
                    <option value="weekly">Weekly Service</option>
                    <option value="monthly">Monthly Service</option>
                    <option value="custom">Custom Schedule</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your specific needs, preferred schedule, or any special requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-large">Request Free Quote</button>

              <p className="form-disclaimer">
                By submitting this form, you agree to be contacted by AA Fleet Wash regarding your quote request. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quote;

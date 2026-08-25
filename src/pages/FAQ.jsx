import { useState } from 'react';
import './SharedPages.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does a truck wash cost?',
      answer: 'Every job is quoted on size, condition and frequency. Singles, combinations, fleets and heavy machinery are all priced individually. Send a photo and a postcode, we\'ll come back with a fixed quote in minutes.'
    },
    {
      question: 'Do you really come to my location?',
      answer: '100% mobile service anywhere across Melbourne and regional Victoria. We bring water, power, equipment and disposal. You bring the rig. Most depots, industrial parks, job sites and parking areas work fine, just send us the address and we\'ll confirm access.'
    },
    {
      question: 'Are you insured?',
      answer: 'Fully insured with public liability and workers compensation. We also carry our own water supply and disposal equipment, so there\'s no impact on your site utilities or compliance.'
    },
    {
      question: 'Will the wash damage paint, decals or aluminium?',
      answer: 'No. We use pH-balanced chemicals, two-bucket safe-wash method, and soft-touch tools. Every operator is trained on painted cabs, vinyl wraps, polished aluminum and powder coat. If we\'re not sure, we ask first.'
    },
    {
      question: 'How long does a wash take?',
      answer: 'Prime mover exterior: 60 to 90 minutes. Dog and tipper combo: 2 to 3 hours. Fleet program with multiple units: scheduled around your dispatch so clean rigs never hold up a load.'
    },
    {
      question: 'Can you set up a recurring fleet program?',
      answer: 'Yes. Weekly, fortnightly or monthly wash schedule with fixed pricing. Same crew every time, same standard, one invoice. Built for fleet operators who want consistent results without the back-and-forth.'
    },
    {
      question: 'Do you wash heavy machinery?',
      answer: 'We do. Excavators, loaders, tippers, cranes, anything that rolls or digs. Construction equipment gets the same care as road trucks, degreasing, pressure work, and a proper finish before it goes back to the job.'
    },
    {
      question: 'What if I\'m not happy with the wash?',
      answer: 'Walk-around inspection before we leave. If anything\'s missed, we fix it on the spot. If you spot something after we\'re gone, we come back and re-do it free. No arguments, no invoices until it\'s right.'
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes, available on request. Useful for fleet records, resale listings, or just seeing the difference. We can also send progress shots during the wash if you want proof of the process.'
    },
    {
      question: 'What cleaning products do you use?',
      answer: 'Commercial-grade detergents and degreasers designed for trucks and heavy equipment. Everything is pH-balanced and safe for painted surfaces, aluminum, chrome and vinyl. No harsh acids or solvents unless specifically needed and approved first.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Everything you'd ask before booking.</h1>
          <p>Common questions about pricing, service, and what to expect when you book AA Fleet Wash.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="section-container">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="faq-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="section-container">
          <h2>Still Have Questions?</h2>
          <p>We're here to help. Contact us for personalized assistance.</p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default FAQ;

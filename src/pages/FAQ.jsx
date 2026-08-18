import { useState } from 'react';
import './SharedPages.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of vehicles do you wash?',
      answer: 'We wash all types of vehicles including cars, SUVs, trucks, trailers, construction equipment, cranes, bulldozers, excavators, and heavy machinery. If it needs cleaning, we can handle it.'
    },
    {
      question: 'Do you wash heavy construction equipment?',
      answer: 'Yes! We specialize in heavy equipment washing including bulldozers, excavators, cranes, loaders, graders, and all types of construction machinery. We have the equipment and expertise to handle the largest and dirtiest jobs.'
    },
    {
      question: 'Do you offer fleet washing services?',
      answer: 'Absolutely. We offer comprehensive fleet washing programs with scheduled service, detailed reporting, multi-vehicle discounts, and dedicated account management. Perfect for companies with multiple vehicles.'
    },
    {
      question: 'Do you offer mobile washing services?',
      answer: 'Yes, we can bring our professional washing services to your location. This is ideal for large equipment, multiple vehicles, or when you need to minimize downtime.'
    },
    {
      question: 'How do I request a quote?',
      answer: 'You can request a quote through our website by filling out the quote form, or by calling or emailing us directly. We\'ll need information about your vehicle/equipment type and your specific needs.'
    },
    {
      question: 'How often should commercial equipment be washed?',
      answer: 'It depends on usage and environment. We typically recommend monthly washing for active fleet vehicles and construction equipment. Regular washing prevents buildup, maintains appearance, and can extend equipment life.'
    },
    {
      question: 'What cleaning products do you use?',
      answer: 'We use professional-grade, environmentally responsible cleaning products specifically designed for commercial vehicles and heavy equipment. Products are chosen based on the type of equipment and level of cleaning required.'
    },
    {
      question: 'How long does a typical wash take?',
      answer: 'Time varies by vehicle size and service level. A standard truck wash takes 30-45 minutes, while heavy equipment can take 1-2 hours. Fleet services are scheduled to minimize disruption to your operations.'
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes, documentation is available upon request, especially valuable for fleet managers who need to track maintenance and report to stakeholders.'
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we carry full liability insurance and workers compensation coverage. Your equipment and property are protected while in our care.'
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
          <div className="hero-badge">FAQ</div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our services</p>
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

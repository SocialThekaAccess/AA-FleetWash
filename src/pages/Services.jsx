import { Link } from 'react-router-dom';
import redTruck from '../assets/RedTruck1.png';
import redTruck2 from '../assets/RedTruck2.png';
import whiteTruck1 from '../assets/TruckWhite1.png';
import whiteTruck2 from '../assets/TruckWhite2.png';
import whiteTruck3 from '../assets/truckwhite3.png';
import minoTruck1 from '../assets/MinoTruck1.png';
import minoTruck2 from '../assets/MinoTruck2.png';
import truck1 from '../assets/Truck1.png';
import './Services.css';

function Services() {
  const services = [
    {
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
      time: '60–90 min',
      image: redTruck,
      liveStatus: 'Prime mover detail'
    },
    {
      number: '02',
      eyebrow: 'CAB FIT FOR A LONG-HAUL.',
      title: 'Interior Detail',
      description: 'Vacuum, steam, dash, vents, headliner, glass and seats. Smoke and odour treatment available. You\'ll forget how dirty it was.',
      features: [
        'Steam sanitise',
        'Leather conditioning',
        'Odour treatment'
      ],
      time: '90–120 min',
      image: whiteTruck1,
      liveStatus: 'Truck + trailer'
    },
    {
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
      image: minoTruck1,
      liveStatus: 'Heavy combo wash'
    },
    {
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
      image: redTruck2,
      liveStatus: 'Mobile service'
    },
    {
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
      image: whiteTruck2,
      liveStatus: 'Fleet program'
    },
    {
      number: '06',
      eyebrow: 'DIRT THAT DOESN\'T BUDGET.',
      title: 'Heavy Machinery Wash',
      description: 'Purpose-built for loaders, excavators, graders, bulldozers and cranes. Hot-water pressure washing that strips mud, concrete and builder\'s dust without damaging hydraulics or decals.',
      features: [
        'High-pressure hot water',
        'Hydraulic-safe',
        'Undercarriage clean'
      ],
      time: '90–180 min',
      image: minoTruck2,
      liveStatus: 'Machinery clean'
    }
  ];

  return (
    <div className="services-page-jsa">
      {/* Services List */}
      <section className="services-list-jsa">
        <div className="section-container">
          {services.map((service, index) => (
            <div key={index} className={`service-block ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              {/* Image Side */}
              <div className="service-block-image">
                <div className="service-number-badge">{service.number}</div>
                {service.badge && (
                  <div className="service-most-booked-badge">{service.badge}</div>
                )}
                <img src={service.image} alt={service.title} />
                <div className="service-live-status">
                  <span className="live-dot"></span>
                  <span className="live-label">LIVE</span>
                  <span className="live-service">{service.liveStatus}</span>
                </div>
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

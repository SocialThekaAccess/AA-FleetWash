import cornerTruck from '../assets/CornorTruck.png';
import rightCornerTruck from '../assets/RightCornorTruck.png';
import redTruck from '../assets/RedTruck.png';
import whiteTruck from '../assets/TruckWhite1.png';
import minoTruck from '../assets/MinoTruck1.png';
import truckTire from '../assets/TruckTire.png';
import './SharedPages.css';

function Equipment() {
  const equipment = [
    { name: 'Trucks', image: redTruck, description: 'Semi-trucks, delivery trucks, box trucks' },
    { name: 'Trailers', image: whiteTruck, description: 'All trailer types and containers' },
    { name: 'Cranes', image: cornerTruck, description: 'Tower cranes and mobile cranes' },
    { name: 'Bulldozers', image: rightCornerTruck, description: 'All bulldozer models and sizes' },
    { name: 'Excavators', image: minoTruck, description: 'Mini to large excavators' },
    { name: 'Heavy Machinery', image: truckTire, description: 'Construction and industrial equipment' }
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="hero-badge">EQUIPMENT</div>
          <h1>We Clean Everything</h1>
          <p>From personal vehicles to the largest industrial machinery</p>
        </div>
      </section>

      <section className="page-content">
        <div className="section-container">
          <div className="equipment-grid">
            {equipment.map((item, index) => (
              <div key={index} className="equipment-card">
                <div className="equipment-image-wrapper">
                  <img src={item.image} alt={item.name} className="equipment-image" />
                  <div className="equipment-overlay"></div>
                </div>
                <div className="equipment-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="section-container">
          <h2>Have Unique Equipment?</h2>
          <p>We handle custom cleaning challenges. Contact us to discuss your specific needs.</p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Equipment;

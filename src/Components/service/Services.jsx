
import './Services.css';

const services = [
  { title: "CREATIVE DESIGN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.", icon: "🖌️" },
  { title: "BRANDING", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.", icon: "🏴" },
  { title: "USER INTERFACE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.", icon: "💻" },
  { title: "USER EXPERIENCE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.", icon: "👥" },
  { title: "CLEAN CODE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.", icon: "💾" },
  { title: "FAST SUPPORT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.", icon: "⚡" },
];

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <h2>MY SERVICES</h2>
        <div className="underline"></div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

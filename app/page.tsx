import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to FakerCraft</h1>
        <p>Your one-stop solution for generating realistic fake data!</p>
        <button>Get Started</button>
      </section>
      
      {/* Features Showcase */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>
            <h3>High-Quality Data</h3>
            <p>Generate realistic names, addresses, and more.</p>
          </li>
          <li>
            <h3>Easy Integration</h3>
            <p>Seamlessly integrate with your existing applications.</p>
          </li>
          <li>
            <h3>Customizable</h3>
            <p>Easily customize data types to fit your needs.</p>
          </li>
        </ul>
      </section>
      
      {/* Call-to-Action */}
      <section className="cta">
        <h2>Ready to boost your projects?</h2>
        <button>Sign Up Now</button>
      </section>
      
      <style jsx>{`
        .hero {
          background: #f5f5f5;
          padding: 40px;
          text-align: center;
        }
        .features {
          padding: 40px;
        }
        .cta {
          text-align: center;
          padding: 40px;
          background: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
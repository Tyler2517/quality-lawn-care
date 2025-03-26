import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // You'll need to create this CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Lawn Care Services</h1>
          <p>Creating beautiful outdoor spaces for your home or business</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro">
        <div className="container">
          <div className="intro-content">
            <h2>Welcome to Quality Lawn Care</h2>
            <p>With over 15 years of experience, we provide exceptional lawn care and landscaping services to residential and commercial properties. Our team of professionals is dedicated to maintaining and enhancing the beauty of your outdoor spaces.</p>
            <Link to="/about" className="btn btn-tertiary">Learn More About Us</Link>
          </div>
          <div className="intro-image">
            <img src="/images/lawn-care-team.jpg" alt="Quality Lawn Care Team" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-cut"></i>
              <h3>Lawn Mowing</h3>
              <p>Regular mowing to keep your lawn healthy and looking its best year-round.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-leaf"></i>
              <h3>Landscaping</h3>
              <p>Custom landscape design and installation to enhance your property's beauty.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-seedling"></i>
              <h3>Lawn Treatment</h3>
              <p>Fertilization, weed control, and pest management for a lush, green lawn.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-snowflake"></i>
              <h3>Seasonal Services</h3>
              <p>Spring cleanup, fall leaf removal, and winter preparation services.</p>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-box">
            <p>"Quality Lawn Care has been maintaining our property for three years now, and we couldn't be happier. Their attention to detail and professional service is unmatched."</p>
            <div className="testimonial-author">
              <h4>- Michael Johnson, Homeowner</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Lawn?</h2>
          <p>Contact us today for a free consultation and estimate.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
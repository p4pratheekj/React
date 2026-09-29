import React from 'react'
import { Link } from 'react-router-dom'
import HoverTitle from './HoverTitle';

const Home = () => {
  return (
    <div style={{ paddingBottom: '60px' }}>
      <div className="container home-grid" style={{ minHeight: '75vh' ,fontFamily:'revert-layer'}}>
        <div style={{ paddingRight: '1px' }}>
          <HoverTitle text="Unapologetic modern style." />
          
          <p className="hero-subtext" style={{ marginTop: '20px', marginBottom: '40px', lineHeight: '1.8' }}>
            The premium fall collection is here. Redefine your aesthetic with our meticulously curated, purely neomorphic essentials.
          </p>
          
          <Link to="/collection" style={{ textDecoration: 'none' }}>
            <button className="btn" style={{ padding: '16px 36px', fontSize: '1.1rem', width: 'auto' }}>
              Shop the Collection
            </button>
          </Link>
        </div>
        <div className="hero-image-placeholder" style={{ 
          width: '100%', 
          height: '450px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '2.5rem',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: '900', 
          color: '#00ffa3', 
          textTransform: 'uppercase', 
          letterSpacing: '8px',
          backgroundColor: '#050505',
          backgroundImage: 'linear-gradient(rgba(0, 255, 163, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 163, 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          border: '1px solid #1a1a1a',
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '0.8rem', color: '#555', letterSpacing: '4px', fontFamily: 'monospace' }}>
            SYS.REQ // 04.992
          </div>
          <div style={{ position: 'absolute', bottom: '20px', right: '70px', fontSize: '0.8rem', color: '#555', letterSpacing: '4px', fontFamily: 'monospace' }}>
            [ INVENTORY_LINKED ]
          </div>
          <span style={{ zIndex: 1, textShadow: '0 0 20px rgba(0, 255, 163, 0.4)' }}>
            Tech-Wear Vibe
          </span>
        </div>
      </div>
      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✦</div>
            <h3 style={{ marginBottom: '10px' }}>Sartorial Excellence</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Crafted with uncompromising precision and premium materials for longevity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 style={{ marginBottom: '10px' }}>Global Shipping</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Complimentary express delivery on all international orders over $150.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♻️</div>
            <h3 style={{ marginBottom: '10px' }}>Sustainable Focus</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Ethically sourced components ensuring a zero-carbon footprint pipeline.</p>
          </div>
        </div>
      </div>
      <div className="categories-section">
        <h2 style={{ fontSize: '3rem', textAlign: 'center', letterSpacing: '-1px', marginBottom: '40px', fontWeight:'800' }}>Curated Selections</h2>
        <div className="categories-grid">
          <Link to="/collection" className="category-card" style={{  background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%'}}>
            <h3>Heavy Outerwear</h3>
          </Link>
          <Link to="/collection" className="category-card" style={{ background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%' }}>
            <h3>Modern Footwear</h3>
          </Link>
          <Link to="/collection" className="category-card" style={{ background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%'}}>
            <h3>Everyday Essentials</h3>
          </Link>
        </div>
      </div>
      <div className="newsletter-section">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Join the Vanguard.</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.2rem' }}>
          Subscribe to receive exclusive early access to our limited-run drops.
        </p>
        <form style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" className="neo-input" required />
          <button type="submit" className="btn" style={{ width: 'auto', padding: '16px 32px', marginBottom: '20px' }}>
            Subscribe
          </button>
        </form>
      </div>

    </div>
  )
}

export default Home
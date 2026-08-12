import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '600',
    fontSize: '1.1rem'
  }
  // ranjith@govafo.com

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 30px', backgroundColor: '#e5e5e5' }}>
      
      <Link to="/" className="nav-brand" style={{ fontFamily: 'fantasy', fontSize: '40px', textDecoration: 'none', color: '#000' }}>
        LuxeVault
      </Link>
      <div className="nav-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/collection" style={linkStyle}>Collection</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/cart" style={linkStyle} > Cart <Badge bg="secondary">{cartCount}</Badge>
      <span className="visually-hidden">unread messages</span></Link>
      </div>
      
    </nav>
  )
}

export default Navbar;
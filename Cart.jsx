import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; 

const Cart = () => {
  // Pulling 'cart' directly from the Context to match CartContext.jsx
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Safely calculate the total using the quantity property added by CartContext
  const cartTotal = cart ? cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) : 0;
  const itemCount = cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <div className="container" style={{ padding: '60px 20px', minHeight: '80vh', color: '#fff' }}>
      
      <div style={{ borderBottom: '2px solid #fff', paddingBottom: '20px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', textTransform: 'uppercase', letterSpacing: '-2px', margin: 0, lineHeight: '0.9', fontFamily: '"Inter", sans-serif', fontWeight: '900' }}>
          Operations <br /> <span style={{ color: '#555' }}>Cart</span>
        </h1>
        <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '1rem', color: '#ff3333', fontWeight: 'bold' }}>
          [ {itemCount} ITEMS ]
        </div>
      </div>

      {itemCount === 0 ? (
        <div style={{ padding: '40px', border: '1px dashed #333', textAlign: 'center', fontFamily: '"Space Mono", monospace' }}>
          CART_IS_EMPTY
          <br /><br />
          <Link to="/collection" style={{ color: '#00ffa3', textDecoration: 'none', fontWeight: 'bold' }}>
            &gt; RETURN TO CATALOG
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', padding: '20px 0' }}>
                <div>
                  <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.8rem', color: '#888', marginBottom: '5px' }}>
                    ID: {item.id} | QTY: {item.quantity}
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: '"Space Grotesk", sans-serif' }}>
                    {item.name || item.title}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '1.1rem' }}>
                    Rs.{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ 
                      background: 'transparent', 
                      border: '1px solid #ff3333', 
                      color: '#ff3333', 
                      padding: '8px 12px', 
                      cursor: 'pointer',
                      fontFamily: '"Space Mono", monospace',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => { e.target.style.background = '#ff3333'; e.target.style.color = '#000'; }}
                    onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#ff3333'; }}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ border: '2px solid #333', padding: '30px', backgroundColor: '#050505', height: 'fit-content' }}>
            <h2 style={{ fontSize: '1.5rem', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '15px', marginBottom: '20px', letterSpacing: '-1px' }}>
              Summary
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontFamily: '"Space Mono", monospace' }}>
              <span>SUBTOTAL</span>
              <span>Rs.{cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontFamily: '"Space Mono", monospace', color: '#888' }}>
              <span>SHIPPING</span>
              <span>CALCULATED</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', fontSize: '1.5rem', fontWeight: 'bold', borderTop: '1px solid #333', paddingTop: '15px' }}>
              <span>TOTAL</span>
              <span style={{ color: '#ff3333' }}>Rs.{cartTotal.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={() => navigate('/payment')}
              style={{ 
                width: '100%', 
                padding: '20px', 
                backgroundColor: '#fff', 
                color: '#000', 
                border: 'none', 
                fontSize: '1.2rem', 
                fontWeight: '900', 
                textTransform: 'uppercase', 
                cursor: 'pointer',
                fontFamily: '"Space Grotesk", sans-serif',
                boxShadow: '6px 6px 0px #ff3333',
                transition: 'transform 0.1s, box-shadow 0.1s'
              }}
              onMouseDown={(e) => { e.target.style.transform = 'translate(4px, 4px)'; e.target.style.boxShadow = '2px 2px 0px #ff3333'; }}
              onMouseUp={(e) => { e.target.style.transform = 'translate(0px, 0px)'; e.target.style.boxShadow = '6px 6px 0px #ff3333'; }}
            >
              Initialize Checkout
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;
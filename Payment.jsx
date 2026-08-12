import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

const Payment = () => {
  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      alert(`Payment of Rs.${cartTotal.toFixed(2)} Successful! Thank you for your order.`)
      if (clearCart) clearCart()
      setIsProcessing(false)
      navigate('/')
    }, 1500);
  }

  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '600px', color: '#00ffa3' }}>
      <div className="feature-card" style={{ backgroundColor: '#050505', border: '1px solid #333', padding: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', textAlign: 'center', textTransform: 'uppercase', fontFamily: '"Inter", sans-serif', fontWeight: '900' }}>Secure Checkout</h1>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '40px', fontFamily: '"Space Mono", monospace' }}>
          AMOUNT DUE: <strong style={{ color: '#00ffa3', fontSize: '1.2rem' }}>Rs.{cartTotal.toFixed(2)}</strong>
        </p>

        <form onSubmit={handlePaymentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div>
            <label style={{ fontWeight: 'bold', marginLeft: '10px', display: 'block', marginBottom: '5px', fontFamily: '"Space Mono", monospace', fontSize: '0.8rem' }}>CARDHOLDER_NAME</label>
            <input type="text" className="neo-input" placeholder="John Doe" required style={{ width: '100%', padding: '15px', backgroundColor: 'white' }} />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', marginLeft: '10px', display: 'block', marginBottom: '5px', fontFamily: '"Space Mono", monospace', fontSize: '0.8rem' }}>CARD_NUMBER</label>
            <input type="text" className="neo-input" placeholder="1234 5678 9101 1121" maxLength="19" required style={{ width: '100%', padding: '15px', backgroundColor: '#111', border: '1px solid #333', color: '#fff' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ fontWeight: 'bold', marginLeft: '10px', display: 'block', marginBottom: '5px', fontFamily: '"Space Mono", monospace', fontSize: '0.8rem' }}>EXPIRY (MM/YY)</label>
              <input type="text" className="neo-input" placeholder="12/26" maxLength="5" required style={{ width: '100%', padding: '15px', backgroundColor: '#111', border: '1px solid #333', color: '#fff' }} />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', marginLeft: '10px', display: 'block', marginBottom: '5px', fontFamily: '"Space Mono", monospace', fontSize: '0.8rem' }}>CVV</label>
              <input type="password" className="neo-input" placeholder="123" maxLength="4" required style={{ width: '100%', padding: '15px', backgroundColor: '#111', border: '1px solid #333', color: '#fff' }} />
            </div>
          </div>

          <button type="submit" className="btn" disabled={isProcessing} style={{ 
            marginTop: '20px', 
            padding: '16px', 
            backgroundColor: '#81abf4', 
            color: '#000000', 
            fontWeight: 'bold', 
            border: 'none',
            textTransform: 'uppercase',
            fontFamily: '"Space Grotesk", sans-serif',
            cursor: isProcessing ? 'not-allowed' : 'pointer'
          }}>
            {isProcessing ? 'PROCESSING...' : `PAY $${cartTotal.toFixed(2)} NOW`}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Payment
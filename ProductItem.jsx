import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleAddAndNavigate = () => {
    addToCart(product)
    navigate('/cart')
  }
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      
      <button className="btn" onClick={handleAddAndNavigate}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductItem;
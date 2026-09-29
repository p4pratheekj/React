import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import HoverTitle from './HoverTitle';


const categories = [
  { id: 'shoes', name: "Shoes Collection", image: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-men-s-shoes-logo-icon-design-illustration-walking-icon-object-vector-png-image_12555864.png" },
  { id: 'tshirts', name: "T-Shirts Collection", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeRdYA5hO2102v55lPHwN62sLxoS96WlPeipMgDyYEYKm6zyBknmH6P0&s=10" },
  { id: 'jeans', name: "Jeans Collection", image: "https://www.shutterstock.com/image-vector/jeans-icon-linear-symbol-design-260nw-1209895876.jpg" },
]
const categoryProducts = {
  shoes: [
    { id: 101, name: "Modern Sneakers", price:2999, image: "https://img.tatacliq.com/images/i27//437Wx649H/MP000000028537230_437Wx649H_202509281938491.jpeg" },
    { id: 102, name: "High-Top Canvas", price: 1999, image: "https://assets.ajio.com/medias/sys_master/root/20231009/7saR/652423abddf77915192cd089/-473Wx593H-466453602-beige-MODEL.jpg" },
    { id: 103, name: "Running Trainers", price: 3000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftntPyxVflSjEsQXJhGX44vEYDYkNLa0Ta2qrjcXZhw&s=10" },
    { id: 104, name: "Leather Loafers", price: 1599, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhqxPE6_iISm2Oenh1JTUJFr679Sj2KYq5tQIvLnQqg&s=10" },
  ],
  tshirts: [
    { id: 201, name: "Everyday Essential Tee", price: 1699, image: "https://www.nicobar.com/cdn/shop/files/P0A8744-1_1200x.jpg?v=1749533234" },
    { id: 202, name: "Graphic Print Tee", price: 1699, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoWHJfFex27FG9ZqDY4yMJeLtMz23wFOl0YSGeBGyDX42c9K-qIzpVIE&s=10" },
    { id: 203, name: "Oversized Vintage Tee", price: 2500, image: "https://pronk.in/cdn/shop/files/576_1800x1800.jpg?v=1766993650" },
    { id: 204, name: "Long Sleeve Basic", price: 1050, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRympQL9DXiPAdoR2g5_ZM6C4cZPps3oXrNjcq1UjaLj4bXByZtfOcPGfmG&s=10" },
  ],
  jeans: [
    { id: 301, name: "Premium Denim Jeans", price: 1899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ9louYSUhOmuOG7EhEvcWakpTswRawpP0zJqBBg97CaQbkONm6N6iMw&s=10" },
    { id: 302, name: "Slim Fit Black Jeans", price: 1390, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9goc345vuk3z9N6TOVDdco5cqD_AaH-GfYeuDOVV34rkcWEEfY-PTpac&s=10" },
    { id: 303, name: "Relaxed Fit Blue", price: 1280, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2cpsCwL0SbHXn1zG6NML_6sz8eFmnHK9T8QRib-7HndMphGgIeNaPI8&s=10" },
    { id: 304, name: "Distressed Vintage", price: "Buy Any get it free", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yM8RuvtiPMI5Anyir3k6x2_7Nqr8QcsZGmoZWcYCfIqJmZV-JZm8I847&s=10" },
  ]
}


const Collection = () => {
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [activeCategory, setActiveCategory] = useState(null)

  const handleAddToCart = (product) => {
    addToCart(product)
    // navigate('/cart')
  }

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
        {!activeCategory ? (
          
        <><div><HoverTitle  text="Shop by Category" /></div>
          
          <div className="product-grid">{categories.map((category) => (
              <div 
                key={category.id} 
                className="product-card" 
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveCategory(category.id)}
              >
                <img src={category.image} alt={category.name} className="product-image" />
                <h3 className="product-title" style={{ textAlign: 'center', marginTop: '15px' }}>{category.name}</h3>
                <button className="btn" style={{ marginTop: '10px' }}>
                  View Products
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (

        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '2.5rem', textTransform: 'capitalize' }}>
              {activeCategory}
            </h1>
            <button 
              className="btn" 
              style={{ width: 'auto', background: '#333' }} 
              onClick={() => setActiveCategory(null)}
            >
              ← Back to Categories
            </button>
          </div>
          
          <div className="product-grid">
            {categoryProducts[activeCategory].map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image}alt='' className="product-image" />
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">Rs.{product.price}</p>
                <button className="btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      
    </div>
  )
}

export default Collection
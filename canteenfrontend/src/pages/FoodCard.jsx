import React from 'react';

const FoodCard = ({ name, image, description, price, addToCart }) => {

const handleAddToCart = () => {
    const newItem = { name, image, description, price, quantity: 1 };
    addToCart(newItem);
    console.log('Item added to cart:', newItem);
  };
    
  const cardStyle = {
    width: '200px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    marginRight: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const textStyle = {
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div style={textStyle}>
        <h3 style={{ marginBottom: '10px' }}>{name}</h3>
        <p>{description}</p>
        <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Price: ${price}</p>
         <button onClick={handleAddToCart} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', fontSize: '14px', cursor: 'pointer' }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodCard;

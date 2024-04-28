import React, { useState } from 'react';
import Modal from 'react-modal';
import MyCartPage from './Cart';
import FoodCard from './FoodCard';
import pizzaImage from '../images/pizza.jpg'; 
import pastaImage from '../images/pasta.jpg';
import burgerImage from '../images/burger.jpg'; 
import sushiImage from '../images/sushi.jpg';
import saladImage from '../images/salad.jpg';
import steakImage from '../images/steak.jpg';
import iceCreamImage from '../images/ice-cream.jpg';
import smoothieImage from '../images/smoothie.jpg';
import sandwichImage from '../images/sandwich.jpg';
import soupImage from '../images/soup.jpg';

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Sample food items data
  const foodItems = [
    {
      name: 'Margherita Pizza',
      image: pizzaImage,
      description: 'Classic pizza topped with tomato sauce, mozzarella cheese, and basil.',
      price: 10.99
    },
    {
      name: 'Pasta Carbonara',
      image: pastaImage,
      description: 'Creamy pasta with pancetta, egg, and Parmesan cheese.',
      price: 12.99
    },
    {
      name: 'Burger Combo',
      image: burgerImage,
      description: 'Delicious burger served with fries and soft drink.',
      price: 8.99
    },
    {
      name: 'Sushi Platter',
      image: sushiImage,
      description: 'Assorted sushi rolls served with soy sauce and wasabi.',
      price: 15.99
    },
    {
      name: 'Caesar Salad',
      image: saladImage,
      description: 'Fresh salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
      price: 7.99
    },
    {
      name: 'Grilled Steak',
      image: steakImage,
      description: 'Juicy grilled steak served with roasted vegetables.',
      price: 19.99
    },
    {
      name: 'Ice Cream Sundae',
      image: iceCreamImage,
      description: 'Delicious ice cream topped with chocolate syrup, whipped cream, and nuts.',
      price: 6.99
    },
    {
      name: 'Berry Smoothie',
      image: smoothieImage,
      description: 'Refreshing smoothie made with mixed berries and yogurt.',
      price: 4.99
    },
    {
      name: 'Club Sandwich',
      image: sandwichImage,
      description: 'Classic club sandwich with turkey, bacon, lettuce, tomato, and mayonnaise.',
      price: 9.99
    },
    {
      name: 'Tomato Soup',
      image: soupImage,
      description: 'Homemade tomato soup garnished with fresh basil.',
      price: 5.99
    },
    // Add more food items as needed
  ];

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log('Cart Items:', cartItems);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const increaseQuantity = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity); // Reuse the updateQuantity function
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#333', color: '#fff', padding: '20px', position: 'sticky', top: 0 }}>
        <h2 style={{ marginBottom: '20px', borderBottom: '1px solid #fff', paddingBottom: '10px' }}>Dashboard</h2>
        {/* Sidebar links */}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="#my-order" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>My Order</a>
          </li>
          <li>
            <a href="#take-order" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Take Order</a>
          </li>
        </ul>
        {/* Open Cart button */}
        <button
          onClick={() => setModalIsOpen(true)}
          style={{
            fontSize: '16px',
            marginTop: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer'
          }}
        >
          Open Cart
        </button>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f4f4', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
        {/* Render food cards */}
        <h2>Food Menu</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {foodItems.map((item, index) => (
        <FoodCard
          key={index}
          name={item.name}
          image={item.image}
          description={item.description}
          price={item.price}
          addToCart={addToCart}
        />
      ))}
        </div>

        {/* Modal for displaying cart */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              maxWidth: '600px',
              margin: '0 auto',
              border: 'none',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'left',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff' // Background color for modal content
            }
          }}
        >
          {/* Render MyCartPage component inside modal */}
          <MyCartPage cartItems={cartItems} removeItem={removeItem} increaseQuantity={increaseQuantity} updateQuantity={updateQuantity} closeModal={() => setModalIsOpen(false)} />
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';

const MyCartPage = ({ cartItems, closeModal, removeItem, updateQuantity, increaseQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Here you can implement the logic to place the order
    // This could involve making an API request to a backend server

    // For demonstration purposes, we'll just display an alert message
    alert('Your order has been placed successfully!');

    // After placing the order, you might want to clear the cart
    // You can add that logic here
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>My Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
              {/* Display the item details */}
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', borderRadius: '10px', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{item.name}</h3>
                <p style={{ fontSize: '16px', marginBottom: '5px' }}>Price: ${item.price}</p>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  {/* Buttons to update item quantity and remove item */}
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ fontSize: '20px', marginRight: '10px', padding: '5px' }}>-</button>
                  <p style={{ fontSize: '16px', margin: '0', marginRight: '10px' }}>{item.quantity}</p>
                  <button onClick={() => increaseQuantity(item.id, item.quantity + 1)} style={{ fontSize: '20px', marginRight: '10px', padding: '5px' }}>+</button>
                  <button onClick={() => removeItem(item.id)} style={{ fontSize: '16px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          {/* Display total price and place order button */}
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <strong style={{ fontSize: '24px' }}>Total Price: ${totalPrice.toFixed(2)}</strong>
            <button onClick={handlePlaceOrder} style={{ fontSize: '16px', marginLeft: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Place Order</button>
          </div>
        </div>
      )}

      {/* Button to close the cart */}
      <button onClick={closeModal} style={{ fontSize: '16px', marginTop: '20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>Close Cart</button>
    </div>
  );
};

export default MyCartPage;

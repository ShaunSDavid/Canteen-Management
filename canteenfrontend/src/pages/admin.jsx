import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders()
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const fetchOrders = async () => {
    // Simulated orders data
    const data = [
      { id: 1, time: '10:30 AM', price: '$15', status: 'Pending' },
      { id: 2, time: '11:15 AM', price: '$10', status: 'Completed' },
      { id: 3, time: '12:00 PM', price: '$20', status: 'Pending' },
      { id: 4, time: '1:45 PM', price: '$18', status: 'Completed' },
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return data;
  };

  const handleStatusChange = orderId => {
    // Find the order by ID and update its status
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: order.status === 'Pending' ? 'Completed' : 'Pending' } : order
    );
    setOrders(updatedOrders);
  };

  const navigateToAdminMenu = () => {
    // Navigate to the AdminMenu page
    navigate('/adminMenu');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Order Information</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Order ID</th>
            <th style={tableHeaderStyle}>Order Time</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Order Status</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={tableCellStyle}>{order.id}</td>
              <td style={tableCellStyle}>{order.time}</td>
              <td style={tableCellStyle}>{order.price}</td>
              <td style={tableCellStyle}>{order.status}</td>
              <td style={tableCellStyle}>
                {order.status === 'Pending' ? (
                  <button style={actionButtonStyle} onClick={() => handleStatusChange(order.id)}>
                    Change Status
                  </button>
                ) : (
                  <button style={{ ...actionButtonStyle, backgroundColor: '#ccc' }} disabled>
                    Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={navButtonStyle} onClick={navigateToAdminMenu}>
        Go to Admin Menu
      </button>
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '12px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '12px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const actionButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const navButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default AdminPage;

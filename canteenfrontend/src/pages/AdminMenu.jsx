import React, { useState } from "react";

function AdminMenu() {
  const [items, setItems] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemToRemove, setItemToRemove] = useState(null);

  // Define inline styles as variables
  const modalStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  const modalContentStyle = {
    backgroundColor: "#fefefe",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
    maxWidth: "400px",
    borderRadius: "10px",
  };

  const closeStyle = {
    color: "#aaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const formInputStyle = {
    marginBottom: "10px",
    padding: "5px",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  };

  const handleAddItem = () => {
    if (itemName.trim() !== "" && itemPrice.trim() !== "") {
      const newItem = {
        name: itemName,
        image: itemImage,
        description: itemDescription,
        price: parseFloat(itemPrice),
      };
      setItems([...items, newItem]);
      resetForm();
      setShowAddModal(false);
    }
  };

  const handleRemoveItem = (itemName) => {
    setItemToRemove(itemName);
    setShowRemoveModal(true);
  };

  const confirmRemoveItem = () => {
    const updatedItems = items.filter((item) => item.name !== itemToRemove);
    setItems(updatedItems);
    setItemToRemove(null);
    setShowRemoveModal(false);
  };

  const resetForm = () => {
    setItemName("");
    setItemImage("");
    setItemDescription("");
    setItemPrice("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h1>Admin Page</h1>
      <div style={{ marginBottom: "20px" }}>
        <button style={buttonStyle} onClick={() => setShowAddModal(true)}>
          Add Item to DB
        </button>
        <button style={{ ...buttonStyle, backgroundColor: "#f44336" }} onClick={() => setShowRemoveModal(true)}>
          Remove Item from DB
        </button>
      </div>

      {/* Add Item Modal */}
      {showAddModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <span style={{ ...closeStyle, alignSelf: "flex-end" }} onClick={() => setShowAddModal(false)}>
              &times;
            </span>
            <h2>Add Item</h2>
            {/* Form for adding a new item */}
            {/* Input fields for item details */}
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item Name"
              style={formInputStyle}
            />
            <input
              type="text"
              value={itemImage}
              onChange={(e) => setItemImage(e.target.value)}
              placeholder="Image URL"
              style={formInputStyle}
            />
            <input
              type="text"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              placeholder="Description"
              style={formInputStyle}
            />
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              placeholder="Price"
              style={formInputStyle}
            />
            <button style={{ ...buttonStyle, backgroundColor: "#4caf50" }} onClick={handleAddItem}>
              Add
            </button>
          </div>
        </div>
      )}

      {/* Remove Item Modal */}
      {showRemoveModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <span style={{ ...closeStyle, alignSelf: "flex-end" }} onClick={() => setShowRemoveModal(false)}>
              &times;
            </span>
            <h2>Remove Item</h2>
            <p>Are you sure you want to remove {itemToRemove}?</p>
            <div>
              <button style={{ ...buttonStyle, backgroundColor: "#f44336" }} onClick={confirmRemoveItem}>
                Remove
              </button>
              <button style={{ ...buttonStyle, backgroundColor: "#ccc" }} onClick={() => setShowRemoveModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display existing items */}
      <h2>Items in DB</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>{item.name} - ${item.price}</span>
            <button style={{ ...buttonStyle, backgroundColor: "#f44336" }} onClick={() => handleRemoveItem(item.name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminMenu;

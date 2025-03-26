import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/items/');
        setItems(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching items:", err);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:8000/api/items/${id}/`);
        setItems(items.filter(item => item.id !== id));
      } catch (err) {
        console.error("Error deleting item:", err);
      }
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div>
      <h2 className="mb-4">Items</h2>
      <div className="row">
        {items.length === 0 ? (
          <div className="col-12">
            <p>No items found. <Link to="/create">Add one</Link>?</p>
          </div>
        ) : (
          items.map(item => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description.substring(0, 100)}...</p>
                  <Link to={`/items/${item.id}`} className="btn btn-primary me-2">View</Link>
                  <Link to={`/edit/${item.id}`} className="btn btn-secondary me-2">Edit</Link>
                  <button onClick={() => deleteItem(item.id)} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
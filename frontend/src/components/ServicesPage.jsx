import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/items/${id}/`);
        setItem(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching item:", err);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (!item) return <div className="alert alert-danger">Item not found</div>;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{item.name}</h2>
      </div>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <p className="text-muted">Created: {new Date(item.created_at).toLocaleString()}</p>
        <Link to="/" className="btn btn-primary me-2">Back to List</Link>
        <Link to={`/edit/${item.id}`} className="btn btn-secondary">Edit</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
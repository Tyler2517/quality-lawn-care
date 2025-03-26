import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      const fetchItem = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/items/${id}/`);
          setFormData({
            name: res.data.name,
            description: res.data.description
          });
        } catch (err) {
          console.error("Error fetching item:", err);
        }
      };
      fetchItem();
    }
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isEdit) {
        await axios.put(`http://localhost:8000/api/items/${id}/`, formData);
      } else {
        await axios.post('http://localhost:8000/api/items/', formData);
      }
      navigate('/');
    } catch (err) {
      console.error("Error saving item:", err);
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{isEdit ? 'Edit Item' : 'Create New Item'}</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateControl } from '../redux/controlSlice';
import { useNavigate } from 'react-router-dom';

const ControlUpdateForm = ({ control }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(control.name);
  const [description, setDescription] = useState(control.description);
  const [artifacts, setArtifacts] = useState(control.artifacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedControl = {
      ...control,
      name,
      description,
      artifacts,
    };
    dispatch(updateControl(updatedControl));
    navigate('/controls'); // Redirect to the controls list
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Control Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Artifacts:</label>
        <input
          type="text"
          value={artifacts}
          onChange={(e) => setArtifacts(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Update Control
      </button>
    </form>
  );
};

export default ControlUpdateForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addControl } from '../redux/controlSlice';
import { v4 as uuidv4 } from 'uuid';

const ControlForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [artifacts, setArtifacts] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newControl = {
      id: uuidv4(),
      name,
      description,
      artifacts
    };
    dispatch(addControl(newControl));
    setName('');
    setDescription('');
    setArtifacts('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Security Control</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Control Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter control name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="description">Control Description</label>
        <textarea
          id="description"
          placeholder="Enter control description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="artifacts">Artifacts</label>
        <textarea
          id="artifacts"
          placeholder="Enter possible artifacts (evidence of control implementation)"
          value={artifacts}
          onChange={(e) => setArtifacts(e.target.value)}
          className="block w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Add Control
        </button>
      </div>
    </form>
  );
};

export default ControlForm;

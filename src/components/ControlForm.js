import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addControl, updateControl } from '../redux/controlSlice';
import { v4 as uuidv4 } from 'uuid';

const ControlForm = ({ controlToEdit, clearEdit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [artifacts, setArtifacts] = useState('');

  useEffect(() => {
    if (controlToEdit) {
      setName(controlToEdit.name);
      setDescription(controlToEdit.description);
      setArtifacts(controlToEdit.artifacts);
    }
  }, [controlToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (controlToEdit) {
      dispatch(updateControl({
        id: controlToEdit.id,
        updatedControl: { id: controlToEdit.id, name, description, artifacts }
      }));
      clearEdit();  // Clear after updating
    } else {
      dispatch(addControl({ id: uuidv4(), name, description, artifacts }));
    }

    // Reset form
    setName('');
    setDescription('');
    setArtifacts('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Control Name</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Artifacts</label>
        <input
          type="text"
          value={artifacts}
          onChange={(e) => setArtifacts(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
        {controlToEdit ? 'Update Control' : 'Add Control'}
      </button>
      {controlToEdit && (
        <button type="button" onClick={clearEdit} className="ml-4 text-red-600 hover:text-red-800">
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default ControlForm;

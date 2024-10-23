import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteControl } from '../redux/controlSlice';
import { Link } from 'react-router-dom';
import ControlForm from './ControlForm';

const ControlList = () => {
  const controls = useSelector((state) => state.controls.controlList);
  const dispatch = useDispatch();
  const [controlToEdit, setControlToEdit] = useState(null);

  const handleEdit = (control) => {
    setControlToEdit(control);
  };

  const clearEdit = () => {
    setControlToEdit(null);
  };

  return (
    <div className="min-h-screen bg-custom-image bg-cover bg-center p-4 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-7xl w-full bg-opacity-80">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Security Control List</h2>

        {controlToEdit ? (
          <ControlForm controlToEdit={controlToEdit} clearEdit={clearEdit} />
        ) : (
          <>
            {controls.length === 0 ? (
              <p className="text-gray-600 text-center">No security controls added. Add a control to get started.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {controls.map((control) => (
                  <div
                    key={control.id}
                    className="p-6 bg-gray-50 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
                  >
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800">{control.name}</h3>
                      <p className="text-gray-600 mt-2">{control.description}</p> {/* This will always show */}
                      <p className="text-gray-500 mt-2">
                        <strong>Artifacts:</strong> {control.artifacts}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => handleEdit(control)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg shadow-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(deleteControl(control.id))}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg shadow-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <div className="flex justify-center mt-8">
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
              Back to Add Control
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ControlList;

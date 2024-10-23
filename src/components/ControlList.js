import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteControl } from '../redux/controlSlice';
import { Link } from 'react-router-dom';

const ControlList = () => {
  const controls = useSelector((state) => state.controls.controlList);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-custom-image bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-full mx-auto mt-6 bg-opacity-80">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Security Control List</h2>

        {controls.length === 0 ? (
          <p className="text-gray-600">No security controls added. Add a control to get started.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {controls.map((control) => (
              <div
                key={control.id}
                className="p-4 border border-gray-200 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl font-bold text-gray-800">{control.name}</h3>
                <p className="text-gray-600 mt-2">{control.description}</p>
                <p className="text-gray-500 mt-2"><strong>Artifacts:</strong> {control.artifacts}</p>
                <div className="flex justify-between mt-4">
                  <Link to={`/controls/edit/${control.id}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => dispatch(deleteControl(control.id))}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end mt-4">
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

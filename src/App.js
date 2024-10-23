import React from 'react';
import { Link } from 'react-router-dom';
import ControlForm from './components/ControlForm';

const App = () => {
  return (
    <div className="min-h-screen bg-custom-image bg-cover bg-center flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Security Controls Manager</h1>
        <ControlForm />
        <div className="flex justify-end mt-4">
          <Link to="/controls">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
              View All Controls
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;

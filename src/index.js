import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import ControlList from './components/ControlList'; // Import the ControlList component
import './index.css'; // Include your Tailwind CSS here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Main page with form */}
        <Route path="/controls" element={<ControlList />} /> {/* List page */}
      </Routes>
    </Router>
  </Provider>
);

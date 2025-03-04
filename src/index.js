import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Using the updated custom CSS
import TwoPageFormApp from './TwoPageFormApp';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <TwoPageFormApp />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

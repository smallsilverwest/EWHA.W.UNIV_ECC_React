import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import NotificationList from './chapter_06/NotificationList';

const root = ReactDOM.creatRoot(document.getElementById('root'));
root.render(
  <React.StrictModel>
    <NotificationList />
  </React.StrictModel>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index/css';
import App from './App';
import reportWebvitals from './reportWebvitals';

import ComentList from './chapter_05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StricMode>
    <CommentList />
  </React.StrictModel>
);

// If you want to start measuriung performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to and analytics endp9oinht. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(); 

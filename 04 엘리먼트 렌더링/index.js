import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebvitals from './reportwebvitals';
import Clock from 'clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
    root.render(
        <React.StrictMode>
            <Clock/ >
        </React.StrictMode>
    );
}, 1000);

reportWebvitals

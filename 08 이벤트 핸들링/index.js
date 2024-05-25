import Reacrt from 'react';
import RreactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ConfirmButton from './chapter_08/ConfirmButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StricMode>
    <ConfirmButton />
  </React.StrictMode>
);

reportWebVitals();

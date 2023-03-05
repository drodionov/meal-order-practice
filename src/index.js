import React, {StrictMode} from 'react';
import App from './App'
import {createRoot} from "react-dom";

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
      <App/>
    </StrictMode>
)

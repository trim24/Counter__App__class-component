import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';

const div =document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

);


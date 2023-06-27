import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from "./pages/Login";

const router = createBrowserRouter(
  [{
    path:"/",
    element: <App/>
  },
{
  path:"/signup",
  element: <Signup/>
},
{
  path:"/login",
  element : <Login/>
}]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


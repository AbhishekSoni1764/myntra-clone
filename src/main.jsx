import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './routes/Home.jsx';
import Bag from './routes/Bag.jsx';
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

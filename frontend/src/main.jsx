import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './routes/Home.jsx';
import Bag from './routes/Bag.jsx';
import "./App.css"
import { Provider } from 'react-redux';
import myntraStore from './store/index.js';
import ErrorPage from './components/ErrorPage.jsx';

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
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

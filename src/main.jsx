import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import { Provider } from 'react-redux';
import store from './Store/index.js';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Add from './Components/Add.jsx';
import BalanceAndHistory from './Components/BalanceAndHistory.jsx';
const router = createBrowserRouter([
  {
    path: "/", element: <App></App>, children: [
      {
        path: "/", element: <BalanceAndHistory/>
      },
      {
        path:"/add",element:<Add></Add>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)

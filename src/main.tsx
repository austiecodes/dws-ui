import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/error-page.tsx'
import Navbar from './components/NavBar.tsx'
import Index from './pages/index.tsx'

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/dashboard",
    element: <Navbar/>
  },
  {
    path: "/index",
    element: <Index/>,
  }
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

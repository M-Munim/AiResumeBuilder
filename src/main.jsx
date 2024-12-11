import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignInPage from "./auth/sign-in/index.jsx"
import Home from "./Home/index.jsx"
import Dashboard from "./Dashboard/index.jsx"

const router = createBrowserRouter([
  {
    // path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },

    ]
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)

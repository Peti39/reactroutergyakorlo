import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, Route } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { Main } from './pages/MainPage.tsx'
import { About } from './pages/Support.tsx'
import { User } from './pages/User.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "user/:id",
        Component: User,
      }
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

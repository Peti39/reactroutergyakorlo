import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router';

function App() {
  

  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Main</NavLink> | {" "}
          <NavLink to="/about">About</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <a href="https://github.com/Peti39">GitHub</a>
        <a href="https://petrik.hu/">Petrik</a>

      </footer>
    </>
  )
}

export default App

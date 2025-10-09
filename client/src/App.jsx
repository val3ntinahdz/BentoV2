// Import functions from react-router-dom
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// Import pages
import Dashboard from './pages/DashboardPage';
import Clients from './pages/ClientsPage';

// Import components
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

// Import styles
import './App.css'
import { useEffect, useState } from 'react';

const API_URL = `${ import.meta.env.VITE_SERVER_API }`;

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  
  return (
    <>
      <BrowserRouter>
        <div className="h-screen">
          <Sidebar sidebarToggle={sidebarToggle} />

          <div className={`flex flex-col flex-1 transition-all duration-300 ${ sidebarToggle ? "" : "ml-64" }`}>
            <Header
            sidebarToggle={ sidebarToggle }
            setSidebarToggle={ setSidebarToggle }
            />

            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="*" element={<div>Page not found.</div>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

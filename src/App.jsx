// Import functions from react-router-dom
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// Import pages
import Dashboard from './pages/DashboardPage';
import Clients from './pages/ClientsPage';


// Import styles
import './App.css'

function App() {

  return (
    <>
{/* 
      Call sidebar component with prop "sidebarToggle" */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

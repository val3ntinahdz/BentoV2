import { Header } from "../components/Header"
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';

// Import elements 


const Dashboard = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false); // This sets the sidebar to be false at first

    return (
        <>
            {/* // add flex property */}
            <div className="h-screen">
                <Sidebar sidebarToggle={sidebarToggle} />

                <div className={`flex flex-col flex-1 transition-all duration-300 ${ sidebarToggle ? "" : "ml-64" }`}>
                    <Header
                    sidebarToggle={ sidebarToggle }
                    setSidebarToggle={ setSidebarToggle }
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
import { Header } from "../components/Header"
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';


const Dashboard = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar sidebarToggle={sidebarToggle} />

            <div className={`flex flex-col flex-1 transition-all duration-300 ${ sidebarToggle ? "ml-0" : "ml-64" }`}>
                <Header
                sidebarToggle={ sidebarToggle }
                setSidebarToggle={ setSidebarToggle }
                />
            </div>
        </div>
    )
}

export default Dashboard;
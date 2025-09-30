import { Home } from "lucide-react"
import { Users } from "lucide-react"

export const Sidebar = ({ sidebarToggle }) => {
    return (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-[#1e1e1e] fixed h-full px-4 py-2 border-r border-neutral-800 transition-all duration-300`}>
            <div className="my-5 mb-4 mx-7">
                <h1 className="text-2xl font-onest text-white tracking-tight font-bold">bento</h1>
            </div>

            <hr/>

            <ul className="mt-3 text-white font-bold font-onest">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        <Home className="inline-block w-6 h-6 mr-2 mt-2"></Home>
                        Home
                    </a>
                </li>

                <li className="mb-2 rounder hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        <Users className="inline-block w-6 h-6 mr-2 mt-2"></Users>
                        Clients
                    </a>
                </li>
            </ul>
        </div>
    )
}
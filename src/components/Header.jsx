import { ChevronRight } from 'lucide-react'
import '../App.css'

export const Header = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <nav className="w-full py-10 px-8 transition-all duration-300 flex items-center justify-between">
            <div className='flex items-center'>
                {/* by clicking on this icon, the sidebarToggle value will change to TRUE using our setSidebarToggle state */}
                <ChevronRight className='text-white cursor-pointer mr-5' onClick={() => setSidebarToggle(!sidebarToggle)}/>


                <div>
                    <h1 className="text-white text-4xl font-onest tracking-tight">Hello, <span className='font-bold text-[#C8E678]'>Valentina!👋</span></h1>
                    <p className="text-neutral-400 text-lg mt-2 font-onest tracking-tight">
                        Here's your dashboard overview
                    </p>
                </div>
            </div>
        </nav>
        // <></>
    )
}
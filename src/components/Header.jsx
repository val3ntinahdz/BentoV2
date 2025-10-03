import { ChevronRight, Search } from 'lucide-react'
import '../App.css'

const Header = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <nav className="w-full py-10 px-8 transition-all duration-300 flex items-center justify-between">
            <div className='flex items-center gap-6'>
                <button
                onClick={() => setSidebarToggle(!sidebarToggle)}
                className='rounded-xl bg-[#2a2a2a] p-2.5 group relative'
                >
                    
                    {/* by clicking on this icon, the sidebarToggle value will change to TRUE using our setSidebarToggle state */}
                    <ChevronRight className={`text-white cursor-pointer w-5 h-5 ${ sidebarToggle ? "rotate-0" : "rotate-180" }`}/>
                </button>


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


export default Header;
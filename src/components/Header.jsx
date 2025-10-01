import { Search } from 'lucide-react'
import { ArrowBigRightIcon } from 'lucide-react'
import '../App.css'

export const Header = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <nav className="w-full py-10 px-8 transition-all duration-300 flex items-center justify-between">
            <div className='flex items-center'>
                {/* by clicking on this icon, the sidebarToggle value will change to TRUE using our setSidebarToggle state */}
                <ArrowBigRightIcon className='text-white cursor-pointer mr-5' onClick={() => setSidebarToggle(!sidebarToggle)}/>


                <div>
                    <h1 className="text-white text-4xl font-onest tracking-tight">Hello, <span className='font-bold text-[#C8E678]'>Valentina!👋</span></h1>
                    <p className="text-neutral-400 text-lg mt-2 font-onest tracking-tight">
                        Here's your dashboard overview
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-x-5'>
                <div className='relative w-48 md:w-64'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button className='p-1 focus:outline-none text-black md:text-black'><Search /></button>
                    </span>
                    
                    <input type="text" className='w-full px-4 py-1 pl-10 rounded-3xl shadow outline-none hidden md:block bg-[#f4f4f4]'/>
                </div>

            </div>

        </nav>
        // <></>
    )
}
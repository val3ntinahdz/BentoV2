import '../App.css'

export const Header = () => {
    return (
        <div className="bg-[#5d00ff] w-full py-10 px-8 shadow-lg">
            <h1 className="text-white text-3xl font-raleway tracking-tight">Welcome, <span className='font-bold'>Valentina!</span></h1>

            <p className="text-purple-100 text-lg mt-2 font-raleway tracking-tight">
                Here's your dashboard overview
            </p>
        </div>
        // <></>
    )
}
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchInput = ({ onSearch }) => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <div className="flex items-center gap-x-5">
            <div className="relative w-full sm:w-64 md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-neutral-500" />
              </span>
              
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={handleChange}
                className="w-full text-white py-2.5 px-6 pl-12 rounded-xl shadow-sm outline-none hidden md:block border border-neutral-800 focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 transition-all bg-[#2a2a2a] font-onest placeholder:text-neutral-600"
              />
            </div>
        </div>
    )
    
}

export default SearchInput;
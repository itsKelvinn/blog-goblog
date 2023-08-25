"use client";
import { useState } from "react";
import Image from "next/image";

const SearchBar = ({ onSearch , style}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
      };
    
    return (
        <form onSubmit={handleSearch} className="flex items-start">
            <input
                className={style}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit" className="flex px-1 border rounded border-l-0 rounded-l-none">
                <Image src="/assets/search-icon.svg" width={40} height={40}/>
            </button>
        </form>
    );
}
 
export default SearchBar;
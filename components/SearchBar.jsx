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
            <button type="submit" className=" p-1 px-2 flex border rounded border-l-0 rounded-l-none">
                <Image src="/assets/search-icon.svg" alt="search-icon" width={30} height={30}/>
            </button>
        </form>
    );
}
 
export default SearchBar;
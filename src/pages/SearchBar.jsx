import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

export const SearchBar = ({searchModels}) => {
  return (
        <div className="search-bar">
            <IoSearchSharp className='search-icon'/>
            <input type="text" placeholder={searchModels ? searchModels : "Search"} />
        </div>
  )
}

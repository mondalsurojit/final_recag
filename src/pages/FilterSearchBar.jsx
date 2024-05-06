import React from 'react'
import { IoFilter,IoSearchSharp } from "react-icons/io5";

export const FilterSearchBar = ({btnData}) => {
  return (
    <div className="filter-search-bar">
        <IoSearchSharp className='search-icon'/>
        <input type="text" placeholder={btnData?btnData.searchData:'Search datasets'} />
        <div className="filter-search">
            <IoFilter className='filter-icon'/>
            <div className="filter-content">Filters</div>
        </div>
    </div>
  )
}

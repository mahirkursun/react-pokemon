import React from 'react'

const SearchBox = ({handleChange}) => {
  return (
    <div className='search-box'>
<input 
        className='search'
        type='search' 
        placeholder="Search Pokemon"
        onChange={handleChange}
    />
    </div>
    
  )
}

export default SearchBox
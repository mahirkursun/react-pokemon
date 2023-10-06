import React from 'react'
import "../style/navi.scss"
import SearchBox from './SearchBox'

const Navi = ({handleChange}) => {
  return (
    <div className='nav'>
      <h4>Pokemons</h4>
        <SearchBox
          handleChange= {handleChange}
        />
    </div>
  )
}

export default Navi
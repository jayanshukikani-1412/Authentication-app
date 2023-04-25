import React from 'react'
import "../Searchbar/Searchbar.css"
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'


const Navbar = ({onSearch}) => {
  return (
    <div className='navbar-section'>
      <div className='navbar-container'>
      <Link style={{
        textDecoration:"none"
      }} to={"/home"}> 
      <div className='logo-wrapper'>
            <h2>UserDataSite </h2>
        </div>
      </Link>

        <div className='search-wrapper'>
          <Searchbar onSearchbar={onSearch}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

  ////////////////
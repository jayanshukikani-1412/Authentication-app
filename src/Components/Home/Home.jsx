import React, { useState } from 'react'
import "../Home/Home.css"
import Navbar from '../Navbar/Navbar'
import ProductContainer from '../ProductContainer/ProductContainer'
import Categories from '../Categories/Categories'
import CategoryProducts from '../CategoryProducts/CategoryProducts'

const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategories, setSearchCategories] = useState('');

  function handleSearch(query) {
    console.log(query)
    setSearchQuery(query);
  }

  function handleCategories(category) {
    // console.log(category)
    setSearchCategories(category)
  }



  return (
    <div className='home_container'>

      <div className='nav_container'>
        <Navbar onSearch={handleSearch} />
      </div>
      <div className=''>
        <Categories onCategory={handleCategories} />
      </div>
      {/* <hr style={{
        marginTop:"70px"
      }} /> */}
      <div className='product_container'>
        {searchCategories ? <CategoryProducts searchCategory={searchCategories} />
          : <ProductContainer searchQuery={searchQuery} />
        }
        {/* <ProductContainer searchQuery={searchQuery} /> */}
      </div>
    </div>
  )
}

export default Home

/////////////

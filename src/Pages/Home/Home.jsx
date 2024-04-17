import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import DownloadApp from '../../Components/DownloadApp/DownloadApp'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div className='home'>
      <Header /> 
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <DownloadApp />                
    </div>
  )
}

export default Home

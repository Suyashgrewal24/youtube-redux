import React from 'react'
import SideBar from './SideBar'
import ButtonContainer from './ButtonContainer'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
      <div className=" h-[90.4vh] overflow-x-hidden flex">
        <SideBar />
      <Outlet/> 
      </div>
    </>
  )
}

export default Body
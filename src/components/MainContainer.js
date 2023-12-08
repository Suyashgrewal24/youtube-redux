import React from 'react'
import ButtonContainer from './ButtonContainer'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
   <>
   <div className=" col-span-10 w-screen overflow-y-scroll h-full">
    <ButtonContainer/>
    <VideoContainer/>
   </div>
   </>
  )
}

export default MainContainer
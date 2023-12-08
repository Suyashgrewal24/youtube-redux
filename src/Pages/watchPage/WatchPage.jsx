import React from 'react'
import SuggestedVideo from './SuggestedVideo'
import WatchVideo from './WatchVideo'


function WatchPage() {

  return (
    <div className='flex'>
      <WatchVideo/>
      <SuggestedVideo />
    </div>
  )
}

export default WatchPage

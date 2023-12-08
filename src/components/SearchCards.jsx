import React from 'react'

const SearchCards = ({data}) => {
  const {snippet} = data
  const {title , thumbnails, channelTitle} = snippet
  

  // console.log(thumbnails)


  // console.log(data)
  return (
    <>
           <div className="search-cards flex m-5 mx-8  space-x-6">
                <div className="img">
                    <img className='rounded-md w-80 ' src={thumbnails.medium.url} alt="" srcSet="" />
                </div>
                <div className="content space-y-3">
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <span className='flex space-x-2 text-base text-gray-600'> <p>52k</p> <p>14 hours</p> </span>
                    <p className='text-lg text-gray-600'>{channelTitle}</p>
                </div>

            </div>
    </>
  )
}

export default SearchCards
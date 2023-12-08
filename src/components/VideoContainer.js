import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { POPULAR_VID_API } from '../Utills/Constant/Constant'
import { Link, useSearchParams } from 'react-router-dom'

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([])

  
  const getData = async () => {
    const res = await fetch(POPULAR_VID_API)
    const json = await res.json()
    // console.log(json?.items)
    setVideoData(json?.items)

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {/* VideoCards  */}
      <div className="videoCards flex md:px-4 flex-wrap ">

        {
          videoData.map((videos) => {


            return (
              <Link key={videos.id} to={'/watchpage?id=' + videos.id}>
                <VideoCards  videos={videos} /></Link>

            )
          })
        }


      </div>
    </div>
  )
}

export default VideoContainer
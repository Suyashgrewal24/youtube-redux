import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
// import { API_KEY, SINGLE_WATCH_API } from '../Utills/Constant/Constant'
// import ReactPlayer from "react-player";
import { FaReply } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { isClose } from "../Utills/Slices/SideBarSlice";
import { API_KEY, SINGLE_WATCH_API } from "../Utills/Constant/Constant";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isClose());
  }, []);

  const [watchVideo, setWatchVideo] = useState({});
  const [videoId] = useSearchParams();
  const id = videoId.get("id");
  console.log(id);

  const { snippet } = watchVideo;
 console.log(snippet)
  // console.log(watchVideo?.snippet?.thumbnails?.maxres)

  const getData = async () => {
    const res = await fetch(`${SINGLE_WATCH_API}id=${id}&key=${API_KEY}`);
    const json = await res.json();
    setWatchVideo(json.items[0]);
    // console.log(json.items[0])
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="watchContainer h-full">
        {/* <img className='w- h-80' src={snippet?.thumbnails?.maxres?.url} alt="image" />    */}
        <div className="vid-container p-5 ">
          <iframe
            className="w-4/5 h-[68vh]"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1 className="text-2xl mt-1 w-4/5 ">{snippet?.title}</h1>
          {/* Channel info  */}
          <div className="mt-4 flex justify-between w-5/6">
          <div className="items-center flex space-x-4">
            <div className=" ">
              <img
                className="h-10 rounded-full "
                src="https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className=" space-y-1">
        <p className="font-semibold text-sm">{snippet?.channelTitle}</p>
              <p className=" text-xs">2.98K subscribers</p>
            </div>
            <button className="h-8 bg-black hover:bg-gray-900 text-white rounded-full px-3 text-sm font-semibold">
              Subscribe
            </button>
          </div>
          <div className=" flex space-x-3">
            <div className="">
              <button className="px-5 text-sm py-2 rounded-l-full bg-gray-200 ">
                7K
              </button>
              <span className="bg-gray-200 py-2 text-gray-600">|</span>
              <button className="px-5 text-sm py-2 rounded-r-full bg-gray-200 ">
                7K
              </button>
            </div>
            <button className="px-5  flex items-center space-x-3 text-sm py-2 rounded-full bg-gray-200 ">
              <FaReply className="inline" />
              <span>Share</span>
            </button>
          </div>
        </div>
        </div>

        {/* Comment section  */}
        <div className="comment">{/* <h1></h1> */}</div>
      </div>
    </>
  );
};

export default WatchPage;

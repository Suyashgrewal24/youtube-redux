import { FaReply } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isClose } from "../../Utills/Slices/SideBarSlice"
import { API_KEY, SINGLE_WATCH_API } from "../../Utills/Constant/Constant.js";
// import  FaReply  from "react-icons/fa";

import React, { useEffect, useState } from "react";
import Comments from "./Comments";

function VideoAndComment() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isClose());
  }, []);

  const [watchVideo, setWatchVideo] = useState({});
  const [videoId] = useSearchParams();
  const id = videoId.get("id");
  console.log(id);

  const { snippet } = watchVideo;
  console.log(snippet);

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
    <div className="w-full ">
      <div className=" flex flex-col px-8 py-5">
        <iframe
          className="w-full h-96"
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
         <h1 className="text-lg text-black font-semibold">
          Dolor sit amet text title Lorem ipsum dolor sit amet =
        </h1>
  
      </div>
      <Comments />
    </div>
  );
}

export default VideoAndComment;

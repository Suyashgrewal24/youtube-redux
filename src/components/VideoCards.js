import React from "react";

const VideoCards = ({ videos }) => {
  // console.log(videos)
  const { snippet, statistics } = videos;
  // console.log(snippet)

  const { channelTitle, thumbnails, title, channelId } = snippet;
  const { likeCount } = statistics;
  return (
    <>
      <div className="videoCards w-96   bg-white rounded-md p-4 space-y-2">
        <img
          className="rounded-lg "
          src={thumbnails?.maxres?.url}
          alt="Video Image"
        />

        <div className="card-content">
          <div className="left-channel-img">
            {/* <img className='w-10 rounded-full ' src="https://yt3.ggpht.com/ytc/AGIKgqM5nVvxYZQx8Hi_9l_XqM5K7-y8SW3G2wKAPdrh=s68-c-k-c0x00ffffff-no-rj"  alt="" /> */}
          </div>
          <div className="right-content space-y-1">
            <h1 className="text-base text-black font-semibold">{title}</h1>
            <p className="text-sm  text-gray-700">{channelTitle}</p>
            <span className="flex text-sm space-x-4">
              <p>{likeCount} views</p>
              <p>18 minutes ago</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCards;

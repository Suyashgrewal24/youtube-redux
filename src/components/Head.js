import React, { useState } from "react";
import { NavImg, YoutubeImg } from "../Utills/Constant";
// import youtubeImg from '../Assets/youtube-logo-png-2069.png'
import { FaSistrix, FaVideo, FaRegBell, FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utills/Slices/SideBarSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { searchBarText } from "../Utills/Slices/SearchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(toggleMenu(handleClick));
  };

  const [searchText, setsearchText] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getsearchText = async () => {
    // search suggestions
    const res = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
      searchText
    );
    const json = await res.json();
    setsearchData(json[1]);
    // console.log(json);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getsearchText();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  // search data
  const handleSearch = (text) => {
    dispatch(searchBarText(text))
    navigate('/searchpage')
    setsearchText("")
    // console.log(e);
  };
  return (
    <>
      <nav className="navbar shadow-lg justify-between py-3 flex px-8  bg-white">
        <div className="nav-img flex space-x-5 col-span-2 items-center">
          <img
            onClick={() => handleClick()}
            className="h-5  font-bold cursor-pointer"
            src={NavImg}
            alt=""
          />
          <Link to={"/"}>
            {" "}
            <img className="h-11 cursor-pointer" src={YoutubeImg} alt="" />
          </Link>
        </div>

        {/* second col  */}
        <div className="search relative w-1/3 ">
          <div className="flex w-full">
            <input
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              // onBlur={()=> setShowSuggestions(false)}

              className="border-2 py-1.5 px-3  w-full text-lg border-gray-300 rounded-l-full"
              type="text"
              placeholder="Search"
            />
            <button
              onClick={() => handleSearch(searchText)}
              className=" w-14  border-1 pl-4  text-lg  border-gray-700  h-11 rounded-r-full bg-gray-200 "
            >
              <FaSistrix />
            </button>
          </div>

          {/* suggestion bar */}
          {showSuggestions && (
            <div className="suggestion absolute top-12 px-4 rounded-sm  w-full text-lg bg-white ">
              {searchData.map((data) => {
                {/* console.log(data); */}
                return (
                  <div >
                    <h1
                      onClick={(e) => setsearchText(e.target.innerText)}
                    
                      className="m-2 cursor-pointer"
                    >
                      {data}
                    </h1>
                    <hr className="border-gray-200" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* thirt col */}
        <div className="nav-icons flex space-x-8 items-center text-2xl justify-between">
          <FaVideo />
          <FaRegBell />
          <FaUserCircle />
        </div>
      </nav>
    </>
  );
};

export default Head;

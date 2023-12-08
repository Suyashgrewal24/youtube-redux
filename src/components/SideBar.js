import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isClose } from '../Utills/Slices/SideBarSlice';

const SideBar = () => {
  const isOpen = useSelector((store) => store.navigation.isOpen);
  console.log(isOpen);

  

  const menuItems = [
    'Home',
    'Shorts',
    'Subscription',
    'Home',
    'Shorts',
    'Subscription',
    'Home',
    'Shorts',
    'Subscription',
    'Home',
    'Shorts',
    'Shorts',
    'Subscription',
    'Shorts',
    'Subscription',
    'Subscription',
    'Home',
    'Shorts',
    'Subscription',
  ];

  return isOpen ? (
    <>
      <div className="side-bar overflow-y-scroll h-full  w-1/6  md:col-span-2 bg-white  p-4 px-8 ">
        <ul className="side-items space-y-4">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <li>{item}</li>
              {(index + 1) % 3 === 0 && <hr />}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  ) : null;
};

export default SideBar;

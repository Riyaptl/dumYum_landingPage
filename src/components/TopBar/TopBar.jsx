import React from 'react';
import myImage from "../../images/PngItem_321703.png"
import './TopBar.css'

function TopBar() {
  return (
    <div className='TopBar'>
      <img className="logo" src={myImage}/>
    </div>
  );
}

export default TopBar;

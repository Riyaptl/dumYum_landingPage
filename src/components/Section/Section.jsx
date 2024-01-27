import React from 'react';
import LeftSection from '../../pages/LeftSection/LeftSection';
import RightSection from '../../pages/RightSection/RightSection';
import './Section.css'

function Section() {
  return (
    <div className='Section'>
      <LeftSection/>
      <RightSection/>
    </div>
  );
}

export default Section;

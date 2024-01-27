import React from 'react';
import './LeftSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductImg from '../../images/PngItem_321703.png'
import Choco2 from '../../images/choco2.png'
import Choco1 from '../../images/choco1.png'
import Choco3 from '../../images/choco3.png'
import Choco4 from '../../images/choco4.png'

function LeftSection() {
  return (
    <div className='LeftSection'>
      <Swiper className='Swiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide style={{textAlign: 'center'}}><img className="ProductImg" src={Choco2} /></SwiperSlide>
      <SwiperSlide style={{textAlign: 'center'}}><img className="ProductImg" src={Choco3} /></SwiperSlide>
      <SwiperSlide style={{textAlign: 'center'}}><img className="ProductImg" src={Choco1} /></SwiperSlide>
      <SwiperSlide style={{textAlign: 'center'}}><img className="ProductImg" src={Choco4} /></SwiperSlide>
      ...
    </Swiper>
      
    </div>
  );
}

export default LeftSection;

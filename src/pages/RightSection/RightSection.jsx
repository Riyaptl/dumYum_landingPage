import React, { useState } from 'react';
import './RightSection.css'
import Overlay from '../Overlay/Overlay';

function RightSection() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [ productName, setProductName] = useState('Product Name')
  return (
    <div className="RightSection">
      <div className="title">{productName}</div>
      <div className="tagline">Product tagline</div>
      <hr/>
      <div className="price">Rs. 500</div>
        <button className="buy" onClick={() => setIsOverlayOpen(!isOverlayOpen)}>Buy Now</button>
        <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)} productName={productName}/>
      <div className="condition">*Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quibusdam laudantium hic odio unde ipsa enim ad neque, perspiciatis atque!</div>
      <hr/>
      <ul className="tags">
        <li>Tag 1</li>
        <li>Tag 2</li>
        <li>Tag 3</li>
        <li>Tag 4</li>
      </ul>
      <hr/>
      <div className="description_title">Product Description</div>
      <div className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laudantium ratione, aliquam maiores id nemo necessitatibus nesciunt fuga itaque temporibus cumque. Alias impedit repudiandae recusandae laborum quas itaque reiciendis voluptatibus eos atque debitis nisi asperiores, dignissimos, dicta voluptates cupiditate fuga nobis consequuntur tenetur pariatur iusto dolore, placeat corporis nulla. Nihil!</div>
    </div>
  );
}

export default RightSection;

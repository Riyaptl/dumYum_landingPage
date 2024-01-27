import React from 'react';
import './Overlay.css'
import Form from '../Form/Form';

function Overlay({isOpen, onClose, productName}) {
  return (
    <>
      {isOpen ? (
        <div className="overlay">
            <div className="overlay_background" onClick={onClose}></div>
            <div className="overlay_container">
                <div className="overlay_controls">
                    <button className='overlay_close' type="button" onClick={onClose}/>
                </div>
                <div className="content">
                  <Form productName={productName} onClose={onClose}/>
                </div>
            </div>
      </div>
      ): null}
    </>
  );
}

export default Overlay;

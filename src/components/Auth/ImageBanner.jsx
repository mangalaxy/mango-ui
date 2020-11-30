import React from "react";

const ImageBanner = ({headline, text, imageSrc}) => {
  return (
        <div className='infoContainer login'>
          <div className="content">
            <img src={imageSrc} alt='Banner Logo'/>
            <h2>{headline}</h2>
            <div>
              <span className='description'>{text}</span>
            </div>
          </div>
        </div>
  )
}

export default ImageBanner
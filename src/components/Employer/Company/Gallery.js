import React from "react";


const Gallery = ({images}) => {
  return (
        <div className="gallery">
          {images.map((image, index) => (
                <div key={index} className={`photo-container md-6of12 ${index % 2 ?
                      'right' :
                      'left'}`}>
                  <span>
                    <img src={image} alt={`Item ${index}`}/>
                  </span>
                </div>
          ))
          }
        </div>
  )
}

export default Gallery
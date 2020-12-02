import React from "react";
import Gallery from "../Gallery";

const Promo = ({src}) => {
  return (
        <div className="video-card">
          <div className="flex-embed">
            <div className="flex-embed__ratio flex-embed__ratio--16by9">
              <img src={src} alt="promo" className="flex-embed__content"/>
            </div>
          </div>
        </div>
  )
}

const CompanyBody = ({name, promo, about, images}) => {
  return (
        <section className="company-details md-8of12">
          {promo && <Promo src={promo}/>}
          {about && <div>
            <h2 className='companyName'>About {name}</h2>
            <p>{about}</p>
          </div>}
          {images.length > 1 && <Gallery images={images} />}
        </section>
  )
}

export default CompanyBody

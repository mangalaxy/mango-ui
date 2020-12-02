import CircleIcon from "../../../elements/icons/CircleIcon";
import CheckIcon from "../../../elements/icons/CheckIcon";
import {Link} from "react-router-dom";
import React from "react";

const FeatureCard = ({title, items, itemMap}) => {
  return (
        <div className="feature-card">
          <h3>{title}</h3>
          {items.map(itemMap)}
        </div>
  );
}

const CompanySidebar = ({techStack, perks, benefits, links}) => {
  return (
        <section className="company-sidebar md-4of12">
          {techStack && <FeatureCard title="Tech stack"
                                     items={techStack}
                                     itemMap={(item, index) => (
                                           <div className='item' key={index}>
                                             <span>{item}</span>
                                           </div>
                                     )}
          />
          }
          {perks && <FeatureCard title="Perks"
                                 items={perks}
                                 itemMap={(item, index) => (
                                       <div className='item' key={index}>
                                         <CircleIcon size={6} color="#f44336"/>
                                         <span>{item}</span>
                                       </div>
                                 )}/>
          }
          {benefits && <FeatureCard title="Benefits"
                       items={benefits}
                       itemMap={(item, index) => (
                             <div className='item' key={index}>
                               <CheckIcon size={16} color="#4caf50"/>
                               <span>{item}</span>
                             </div>
                       )}

          />
          }
          {links && <FeatureCard title="Links"
                       items={links}
                       itemMap={(item, index) => (
                             <div className='item' key={index}>
                               <Link to={item} replace><span>{item}</span></Link>
                             </div>
                       )}/>
          }
        </section>
  );
}

export default CompanySidebar
import React from 'react';
import CompanyHeader from './CompanyHeader';
import CompanyBody from "./CompanyBody";
import CompanySidebar from "./CompanySidebar";

import '../company.scss';

const CompanyLayout = ({profile}) => (
      <div className="company-profile-page">
        <CompanyHeader
              logoUrl={profile.logo}
              name={profile.name}
              headline={profile.headline}
              address={profile.address}
        />
        <div className="container">
          <CompanyBody
                name={profile.name}
                promo={profile.promo}
                about={profile.about}
                images={profile.images}
          />
          <CompanySidebar
                techStack={profile.techStack}
                perks={profile.perks}
                benefits={profile.benefits}
                links={profile.links}
          />
        </div>
      </div>
);

export default CompanyLayout;

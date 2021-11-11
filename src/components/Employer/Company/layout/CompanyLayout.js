import React from 'react';
import CompanyHeader from './CompanyHeader';
import CompanyBody from "./CompanyBody";
import CompanySidebar from "./CompanySidebar";

import '../company.scss';

const CompanyLayout = ({profile}) => {
    return (
        <div className="company-profile-page">
            <CompanyHeader
                logoUrl={profile.logoUrl}
                name={profile.name}
                headline={profile.headline}
                address={profile.headquartersAddress}
                />
                <div className="container">
                    <CompanyBody
                        name={profile.name}
                        promo={profile.promoUrl}
                        about={profile.about}
                        images={profile.photos}
                    />
                    <CompanySidebar
                        techStack={profile.skills}
                        perks={profile.perks}
                        benefits={profile.benefits}
                        links={profile.links}
                    />
                </div>
        </div>
    );
};

export default CompanyLayout;

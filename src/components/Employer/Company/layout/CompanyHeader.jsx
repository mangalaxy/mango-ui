import React from "react";
import GreenDash from "../../../elements/GreenLine/greenLine";
import {Link} from "react-router-dom";
import routes from "../../../../constants/routes.json";
import EditIcon from "../../../elements/icons/EditIcon";

const CompanyHeader = ({logoUrl, name, headline, address}) => {
  return (
        <header className="company-header">
          <div className="container">
            <div className="company">
              <div className="company-logo">
                <img src={logoUrl} alt="Logo"/>
              </div>
              <div className="company-info">
                <h4 className="company-title">Company</h4>
                <h2 className="company-name">{name}</h2>
                <GreenDash className="line"/>
                <h5 className="company-headline">{headline}</h5>
                <h5 className="company-location">{address}</h5>
              </div>
            </div>
            <Link to={routes.EMPLOYER.COMPANY_EDIT}>
              <div className="editButton">
                <EditIcon size={25}/>
              </div>
            </Link>
          </div>
        </header>
  );
}

export default CompanyHeader
import React from 'react';
import EmployersCompanyEditForm from '../../Forms/EmployersCompanyEditForm';
import './company.scss';
import routes from '../../../constants/routes.json';
import {employersRanges, industries} from '../../../constants/optionValues';

const CompanyEdit = ({companyProfile, history}) => {
  const handleSave = (companyProfile) => {
    console.log('SAVED!');
   //TODO: send company data to backend
    history.push(routes.EMPLOYER.COMPANY);
  };

  return (
      <div className="company">
        <EmployersCompanyEditForm
            companyProfile={companyProfile}
            onSuccess={handleSave}
            employersRanges={employersRanges}
            industries={industries}
        />
      </div>
  );
};

export default CompanyEdit;

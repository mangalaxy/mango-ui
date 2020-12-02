import React from 'react';
import CompanyLayout from "./layout/CompanyLayout";
import {mockCompanyProfile} from "../../../mocks/companyProfile";


const CompanyPage = () => <CompanyLayout profile={mockCompanyProfile} />

export default CompanyPage
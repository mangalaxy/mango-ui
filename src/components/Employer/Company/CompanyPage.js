import React, {useEffect} from 'react';
import CompanyLayout from "./layout/CompanyLayout";
import {mockCompanyProfile} from "../../../mocks/companyProfile";
import Preloader from '../../../components/Preloader/Preloader';
import {getEmployerCompany} from '../../../actions/employer';
import {connect} from 'react-redux';


const CompanyPage = (props) => {
    const {user, currentCompany, currentCompanyLoading, getCurrentEmployerCompany} = props;

    useEffect(() => {
        getCurrentEmployerCompany(user.id)
    },[]);

    if (currentCompanyLoading) return <Preloader/>

    return (
        <CompanyLayout profile={currentCompany} />
    )
};

const mapStateToProps = ({employer}) => {
    return {
        currentCompany: employer.employerCompany,
        currentCompanyLoading: employer.employerCompanyLoading
    }
};

const mapDispatchToProps = dispatch => ({
    getCurrentEmployerCompany: id => dispatch(getEmployerCompany(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);

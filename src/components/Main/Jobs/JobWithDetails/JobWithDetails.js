import React from 'react';
import './JobWithDetails.scss';
import SvgIcon from '../../../SvgIcon/SvgIcon';
import {companyLocation, employer, marker} from "../../../../assets/icons";

const JobWithDetails = (props) => {
    return (
        <div className='job-details'>
            <div className='job-breadcrumbs'>
                <div className='job-breadcrumbs__item'>Jobs</div>
                <div className='job-breadcrumbs__item'>Design</div>
                <div className='job-breadcrumbs__item'>UX Designer</div>
                <div className='job-breadcrumbs__item'>UI/UX Designer</div>
            </div>
            <h1 className='job-title'>UX/Ui Designer</h1>
            <div className='job-tags'>
                <div className='job-tags__item'>
                    <div className='job-tag'>Employment Type</div>
                    <div className='job-tag-value'>Full time</div>
                </div>
                <div className='job-tags__item'>
                    <div className='job-tag'>Remote</div>
                    <div className='job-tag-value'>No</div>
                </div>
                <div className='job-tags__item'>
                    <div className='job-tag'>Relocation</div>
                    <div className='job-tag-value'>Yes</div>
                </div>
                <div className='job-tags__item'>
                    <div className='job-tag'>Visa sponsorship</div>
                    <div className='job-tag-value'>No</div>
                </div>
                <div className='job-tags__item'>
                    <div className='job-tag'>Years of experience</div>
                    <div className='job-tag-value'>4-6+ years</div>
                </div>
                <div className='job-tags__item'>
                    <div className='job-tag'>Location</div>
                    <div className='job-tag-value'>New York, USA</div>
                </div>
            </div>
            <div className='job-subtitle'>description:</div>
            <div className='job-simple-text'>
                Our customer is an US logistics company that connects brokers with carriers and individual truckers for them to make a deal on the freight shipping. The company has been on the market for almost 40 years, evolving with many technological transformations. We intend to help the customer to achieve their strategic objectives by developing new and evolving existing products, staying relevant with emerging disruptions in this domain.
            </div>
            <div className='job-subtitle'>Responsibilities:</div>
            <ul className='job-properties-list'>
                <li className='job-properties-list__item job-simple-text'>
                    Extrapolating product vision as a synthesis of user needs and business goals
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    Conducting Kick off meetings with customers
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    technologies: HTML/CSS (basic), JS (understanding specifics)
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    Create wireframe/prototype and new UI elements of the product
                </li>
            </ul>
            <div className='job-subtitle'>Requirements:</div>
            <ul className='job-properties-list'>
                <li className='job-properties-list__item job-simple-text'>
                    Extrapolating product vision as a synthesis of user needs and business goals
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    Conducting Kick off meetings with customers
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    technologies: HTML/CSS (basic), JS (understending specifics)
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    Create wireframe/prototype and new UI elements of the product
                </li>
            </ul>
            <div className='job-subtitle'>Skills:</div>
            <ul className='job-properties-list'>
                <li className='job-properties-list__item job-simple-text'>
                    Extrapolating product vision as a synthesis of user needs and business goals
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    Conducting Kick off meetings with customers
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    technologies: HTML/CSS (basic), JS (understending specifics)
                </li>
                <li className='job-properties-list__item job-simple-text'>
                    Create wireframe/prototype and new UI elements of the product
                </li>
            </ul>
            <div className='job-title job-title--margin-top'>about AMAZON</div>
            <div className='company-info'>
                <div className='company-info__item'>
                    <SvgIcon type={employer()} className='company-info-icon'/>
                    <div className='company-info__text'>10 000+ employees</div>
                </div>
                <div className='company-info__item'>
                    <SvgIcon type={companyLocation()} />
                    <div className='company-info__text'>New York, USA</div>
                </div>
                <div className='company-info__item'>
                    <SvgIcon type={marker()} />
                    <div className='company-info__text'>E-commerce</div>
                </div>
            </div>
            <div className='about-company'>
                <div className='job-simple-text'>
                    Our customer is an US logistics company that connects brokers with carriers and individual truckers for them to make a deal on the freight shipping. The company has been on the market for almost 40 years, evolving with many technological transformations. We intend to help the customer to achieve their strategic objectives by developing new and evolving existing products, staying relevant with emerging disruptions in this domain.
                </div>
            </div>
            <div className='job-title job-title--margin-top'>Another jobs from company amazon</div>
            <div className='job-title job-tag-link'>UX/UI Engineer</div>
            <div className='job-title job-tag-link'>UX Lead</div>
            <div className='job-title job-tag-link'>UX Designer</div>
        </div>
    )
}

export default JobWithDetails;
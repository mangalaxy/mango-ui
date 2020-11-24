import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../../../constants/routes.json';
import jobRolesData from '../../../../constants/jobRolesData';
import Heading from "../../../typography/Heading";

import './jobsRoleSelect.scss';

const JobRoleCard = ({role}) => (
    <div className='roleItem'>
      <div className="itemHeader">
        <h4>{role.name}</h4>
      </div>
      <div className="itemImage">
        <img src={role.image} alt="Job Role" className='role-img'/>
      </div>
    </div>
);

const JobsRoleSelect = () => {
  return (
      <div id='main-job-role-select'>
        <div className='contentContainer'>
          <Heading>Find a job</Heading>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio esse facilis libero minus molestiae qui suscipit!
              Cupiditate dolor doloribus earum, eius enim, magni minima modi
              pariatur quasi quia, tenetur voluptatum?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut
              consequatur deleniti dolor ex, exercitationem fugit id, impedit
              laudantium maiores nisi nobis obcaecati, optio porro quis sequi
              tenetur ut velit. Distinctio esse facilis libero minus molestiae
              qui suscipit!
              Cupiditate dolor doloribus earum, eius enim, magni minima modi
              pariatur quasi quia, tenetur voluptatum?
            </p>
          </div>
          <Heading>Job roles</Heading>
          <div className="rolesContainer">
            {jobRolesData.map((role, index) => (
                <Link key={index} to={`${routes.COMMON.FIND_JOB}/${role.link}`}>
                  <JobRoleCard role={role}/>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
};

export default JobsRoleSelect;

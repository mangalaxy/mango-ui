import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../../constants/routes.json';
import './EmployerWelcome.scss';

const WelcomePage = ({name, advocateName}) => {
  return (
    <div className="welcome-frame">
      <h3 className="welcome-frame-greeting">
        Hello, {name}
      </h3>
      <p className="welcome-frame-text">
        Welcome to Mangostart platform, where you can find
        best Hi-Tech talents according to your needs.
      </p>
      <p className="welcome-frame-text">Get started your work by creating a new position</p>
      <p className="welcome-frame-sign">Your career advocate, {advocateName}</p>
      <Link className="welcome-frame-btn" to={routes.EMPLOYER.CREATE_POSITION}>Create new position</Link>
    </div>
  )
}
export default WelcomePage;
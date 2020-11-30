import React from 'react';
import {Link} from 'react-router-dom';
import './EmployerWelcome.scss';

const WelcomePage = ({name, advocateName}) => {
  return (
    <div className="employer-welcome">
      <h3 className="employer-welcome-title">
        Hello, {name}!
      </h3>
      <p className="employer-welcome-text">
        Welcome to Mangostart platform, where you can find
        best Hi-Tech talents according to your needs.
      </p>
      <p className="employer-welcome-text">Get started your work by creating a new position</p>
      <span className="employer-welcome-sign">Your career advocate, </span>
      <span className="employer-welcome-sign">          
        {advocateName}
      </span>
      <Link className="employer-welcome-btn" to={'/create-job'}>Create new position</Link>
    </div>
  )
}
export default WelcomePage;
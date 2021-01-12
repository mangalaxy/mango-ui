import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import EmployerJobList from './EmployerJobList';
import './EmployersPositions.scss';
import routes from '../../../constants/routes.json';

class EmployersPositions extends Component {
  render() {
    return (
      <div className="employersPositions">
        <Link to={routes.EMPLOYER.CREATE_POSITION} className="employersPositions-btn">
          + Create new position
        </Link>
        <h3 className="employersPositions-title">
          Your positions
        </h3>
        <EmployerJobList jobs={this.props.jobs} />
      </div>
    )
  }
}
const mapStoreToProps = store => {
  return {
    jobs: store.jobsReducer
  }
}
export default connect(mapStoreToProps)(EmployersPositions);
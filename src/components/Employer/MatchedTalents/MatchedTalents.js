import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './MatchedTalents.scss';
import iconReturn from '../../../assets/icons/return.png';
import iconClose from '../../../assets/icons/close.png';
import iconLeft from '../../../assets/icons/left.svg';
import iconRight from '../../../assets/icons/right.svg';
import MatchedTalentsItem from './MatchedTalentsItem';
import {jobDeleteAction} from '../../../actions/jobDeleteAction';
import Modal from '../../Modal/Modal';

class MatchedTalents extends Component {
  constructor() {
    super();
    this.state = {isOpenModal: false};
  }

  removeJob() {
    this.props.dispatch(jobDeleteAction(+this.props.match.params.id));
    this.props.history.push('/employers/open-positions');
  }

  toggleModal() {
    this.setState((prevState) => {
      return {isOpenModal: !prevState.isOpenModal};
    });
  }

  render() {
    const selectedId = +this.props.match.params.id;
    let selectedJob = {};
    if (!!this.props.jobs) this.props.jobs.map(item => {
      if (item.id === selectedId) {
        selectedJob = Object.assign({}, item);
      }
      return true;
    });

    const {
      position, skills: [...skillsArr], type, remote, experience,
      location: {city, country}, industry, relocation,
      visaSponsor,
    } = selectedJob;
    //
    // // for job:
    let skillsList = skillsArr ? skillsArr.map(item => {
      return Object.values(item)[0].join(', ');
    }) : '';
    return (
        <>
          <div className="position-bg">
            <div className="position-container">
              <div className="position">
                <div className="position-content">
                  <h4 className="position-content-title">Position</h4>
                  <p className="position-content-title-description">{`${position}`}</p>
                  <h4 className="position-content-skills">Skills</h4>
                  <p className="position-content-skills-description">{`${skillsList.join(
                      ', ')}`}</p>
                </div>
                <div className="position-control">
                  <Link to="/employers/open-positions"
                        className="position-control-item">
                    <img src={iconReturn} className="position-control-item-img1"
                         alt="Go to back"/>
                    Return
                  </Link>
                  <div onClick={this.toggleModal.bind(this)}
                       className="position-control-item"
                       title="Remove position">
                    <img src={iconClose} className="position-control-item-img2"
                         alt="Close"/>
                    Close Position
                  </div>
                </div>
              </div>
              <ul className="position-data">
                <li className="position-data-item">
                  <div className="position-data-item-name">Employment Type</div>
                  <div
                      className="position-data-item-description">{`${type}`}</div>
                </li>
                <li className="position-data-item">
                  <div className="position-data-item-name">Remote</div>
                  <div
                      className="position-data-item-description">{`${remote}`}</div>
                </li>
                <li className="position-data-item">
                  <div className="position-data-item-name">Years of experience
                  </div>
                  <div
                      className="position-data-item-description">{`${experience}`}</div>
                </li>
                <li className="position-data-item">
                  <div className="position-data-item-name">Location</div>
                  <div
                      className="position-data-item-description">{`${city}, ${country}`}</div>
                </li>
                <li className="position-data-item">
                  <div className="position-data-item-name">Industry</div>
                  <div
                      className="position-data-item-description">{`${industry}`}</div>
                </li>
                <li className="position-data-item">
                  <div className="position-data-item-name">Relocation</div>
                  <div
                      className="position-data-item-description">{`${relocation}`}</div>
                </li>
                <li className="position-data-item">
                  <div className="position-data-item-name">Visa Sponsorship
                  </div>
                  <div
                      className="position-data-item-description">{`${visaSponsor}`}</div>
                </li>
              </ul>
            </div>
            {this.state.isOpenModal ?
                <Modal canсelModal={this.toggleModal.bind(this)}
                       modalAction={this.removeJob.bind(this)}
                       modalText={'Are you sure you want to remove this position?'}
                /> :
                null
            }
          </div>
          <div>
            <div className="position-container">
              <h4 className="running-title">1-50
                of {this.props.talents.length} candidates who match your
                criteria</h4>
              {this.props.talents.map(item => (
                  <MatchedTalentsItem key={item.id} talentData={item}/>
              ))
              }
              <h4 className="running-title">
                <img src={iconLeft} alt="Left icon"/>
                1 2 3 ... 19 20
                <img src={iconRight} alt="Right icon"/>
              </h4>
            </div>
          </div>
        </>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    jobs: store.jobsReducer,
    talents: store.talentsReducer,
  };
};
export default connect(mapStoreToProps)(MatchedTalents);
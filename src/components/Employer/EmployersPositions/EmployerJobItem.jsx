import React, {useState} from 'react';
import {connect} from 'react-redux';
import {jobDeleteAction} from '../../../actions/jobDeleteAction';
import Switch from '../../Switch/Switch';
import iconBag from '../../../assets/icons/bag.svg';
import closeIcon from '../../../assets/icons/cross.svg';
import Modal from '../../Modal/Modal';

const EmployerJobItem = (props) => {
  const [modal, setModal] = useState(false);
  let {id, position, location: {city, country}, isChecked, date} = props.entry;

  function filterTags(tagName) {
    return tagName !== 'INPUT' && tagName !== 'SPAN' && tagName !== 'IMG';
  }

  const redirectToMatchedTalents = event => {
    if (filterTags(event.target.tagName) && isChecked) {
      props.history.push(`/employers/matched-talents/${id}`);
    }
  }

  const toggleModal = () => setModal(!modal)
  const removeJob = () => props.dispatch(jobDeleteAction(+id))
  return (
        <>
          <div onClick={redirectToMatchedTalents} className="employersPositions-item">
            <div className="employersPositions-item-icon">
              <div className="employersPositions-item-icon-box">
                <img src={iconBag} width="25px" height="25px" alt="bag icon"/>
              </div>
            </div>
            <div className="employersPositions-item-description">
              <p>{position}<br/>{city},<br/>{country}</p>
            </div>
            <div className="employersPositions-item-control">
              <Switch isChecked={isChecked} name={id}/>
              <span onClick={toggleModal} className="employersPositions-item-control-close">
            <img src={closeIcon} alt="close icon"/>
          </span>
              <div>{date}</div>
            </div>
          </div>
          {modal && <Modal modalText='Are you sure you want to remove this position?'
                               canсelModal={toggleModal}
                               modalAction={removeJob}/>
          }

        </>
  )
}
export default connect()(EmployerJobItem);
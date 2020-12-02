import React from 'react';
import Avatar from '../../../Avatar/Avatar';
import InterviewBurgerMenu from '../InterviewBurgerMenu/InterviewBurgerMenu';

const ScheduleItem = (props) => {
  const {photoURL, fullName, position} = props.talent;

  return (
        <div className='interview-dashboard__schedule-item'>
          <div className='schedule-talent-info'>
            <Avatar img={photoURL} size={70}/>
            <div className='schedule-talent-info__text'>
              <div className='schedule-talent-info__name'>
                {fullName}
              </div>
              <div className='schedule-talent-info__position'>
                {position}
              </div>
            </div>
          </div>
          <div className='schedule-talent-status'>No interviews yet</div>
          <InterviewBurgerMenu/>
        </div>
  )
}

export default ScheduleItem;
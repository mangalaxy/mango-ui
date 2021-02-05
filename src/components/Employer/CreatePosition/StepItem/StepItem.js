import React from 'react';
import './StepItem.scss';

const StepItem = ({label, current, complete}) => (
    <div className="timeLineItem">
      <div className={current ?
          'item current' : complete ? 'item complete' : 'item'}>
        {complete ? <i className="pi pi-check p-mr-2"/>
            : <span>{label}</span>}
      </div>
    </div>

);

export default StepItem;
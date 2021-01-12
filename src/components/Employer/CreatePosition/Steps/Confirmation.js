import React from 'react';
import './Steps.scss';
import {Field} from 'formik'

const Confirmation = ({goNext, goPrev}) => {
  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <h3 className='profileBuilderTitle'>Does this look correct?</h3>
        </div>
        <div className='profileBuilderButtonsContainer'>
          <button onClick={goPrev} type='button' className='accent-btn__transparent'>Prev</button>
          <button onClick={goNext} type='button' className='accent-btn'>Next</button>
        </div>
      </>
  );
};

export default Confirmation;
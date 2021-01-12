import React from 'react';
import './Steps.scss';
import {Field} from 'formik'

const Step6 = ({goNext, goPrev}) => {
  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <h5 className='requiredAttention'>
            All fields are required unless otherwise stated.
          </h5>
          <h3 className='profileBuilderTitle'>Job description</h3>
          <Field type='text' name='positionName2'/>
        </div>
        <div className='profileBuilderButtonsContainer'>
          <button onClick={goPrev} type='button' className='accent-btn__transparent'>Prev</button>
          <button onClick={goNext} type='button' className='accent-btn'>Next</button>
        </div>
      </>
  );
};

export default Step6;
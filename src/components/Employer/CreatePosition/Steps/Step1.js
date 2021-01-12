import React from 'react';
import './Steps.scss';
import {Field} from 'formik'

const Step1 = ({goNext, goPrev}) => {
  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <h5 className='requiredAttention'>
            All fields are required unless otherwise stated.
          </h5>
          <h3 className='profileBuilderTitle'>position’s name</h3>
          <Field type='text' name='positionName'/>
        </div>
        <div className='profileBuilderButtonsContainer'>
          <button onClick={goNext} type='button' className='accent-btn'>Next</button>
        </div>
      </>
  );
};

export default Step1;
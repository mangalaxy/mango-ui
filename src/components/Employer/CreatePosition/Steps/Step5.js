import React from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';

const Step5 = ({goNext, goPrev}) => {
  const {values, errors, touched}= useFormikContext()

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <h5 className='requiredAttention'>
            All fields are required unless otherwise stated.
          </h5>
          <h3 className='profileBuilderTitle'>Experience</h3>
          <Field type='text' name='positionName2'/>
        </div>
        <div className='profileBuilderButtonsContainer'>
          <button  onClick={goPrev} type='button' className='accent-btn__transparent'>
            Previous
            <i className='pi pi-chevron-left'/>
          </button>
          <button disabled={!(values.jobRoleTitle)} onClick={goNext} type='button' className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step5;
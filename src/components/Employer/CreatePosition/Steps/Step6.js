import React from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import RequiredNotice from '../RequiredNotice';

const Step6 = ({goNext, goPrev}) => {
  const {values, errors, touched}= useFormikContext()

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <RequiredNotice/>
           <h3 className='profileBuilderTitle'>Job description</h3>
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

export default Step6;
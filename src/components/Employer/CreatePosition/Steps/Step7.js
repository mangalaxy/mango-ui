import React from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import RequiredNotice from '../RequiredNotice';
import {industries} from '../../../../constants/optionValues';
import FKTextAreaInput from '../../../Fields/FKTextAreaInput/FKTextAreaInput';

const Step7 = ({goNext, goPrev}) => {
  const {values, errors, touched}= useFormikContext()

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <RequiredNotice/>
           <h3 className='profileBuilderTitle'>Job description</h3>
          <div className="fieldsContainer">
            <div className="fieldsColumn fullSize">
              <label className='fieldLabel'>Description</label>
              <Field
                  component={FKTextAreaInput}
                  name="description"
                  placeholder='Job description'
                  rows={17}
                  inputClassName='description'
              />
            </div>
          </div>
        </div>
        <div className='profileBuilderButtonsContainer'>
          <button  onClick={goPrev} type='button' className='accent-btn__transparent'>
            Previous
            <i className='pi pi-chevron-left'/>
          </button>
          <button disabled={!(values.description)} onClick={goNext} type='button' className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step7;
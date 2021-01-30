import React from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import TextInput from '../../../Fields/CommonTextInput/TextInput';
import FKDropdown from '../../../Fields/FKDropdown/FKDropdown';
import {industries} from '../../../../constants/optionValues';
import FKRadioGroup from '../../../Fields/FKRadioGroup/FKRadioGroup';
import RequiredNotice from '../RequiredNotice';

const Step2 = ({goNext, goPrev}) => {
  const {values, errors}= useFormikContext()
  const jobTypes = [
      'Full Time',
      'Contract',
      'Remote',
      'Part-time'
  ]

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <RequiredNotice/>
          <h3 className='profileBuilderTitle'>Type of employment</h3>

          <div className="fieldsContainer">
            <div className="fieldsColumn">
              <label className='fieldLabel'>Which type of employment you are offering?</label>
              <Field
                  component={FKRadioGroup}
                  inputClassName='textFiled'
                  name="jobType"
                  options={jobTypes}
              />

            </div>
            <div className="fieldsColumn"/>
          </div>

        </div>
        <div className='profileBuilderButtonsContainer'>
          <button  onClick={goPrev} type='button' className='accent-btn__transparent'>
            Previous
            <i className='pi pi-chevron-left'/>
          </button>
          <button disabled={!(values.jobType)} onClick={goNext} type='button' className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step2;
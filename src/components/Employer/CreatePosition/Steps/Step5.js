import React from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import RequiredNotice from '../RequiredNotice';
import FKRadioGroup from '../../../Fields/FKRadioGroup/FKRadioGroup';
import {experienceLevels} from '../../../../constants/optionValues';

const Step5 = ({goNext, goPrev}) => {
  const {values, errors, touched}= useFormikContext()

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <RequiredNotice/>
          <h3 className='profileBuilderTitle'>Experience</h3>
          <div className="fieldsContainer">
            <div className="fieldsColumn fullSize">
              <label className='fieldLabel'>How many years of appropriate experience should candidate have?</label>
              <Field
                  component={FKRadioGroup}
                  inputClassName='textFiled'
                  name="experienceRequired"
                  options={experienceLevels}
              />
            </div>
          </div>
        </div>

        <div className='profileBuilderButtonsContainer'>
          <button  onClick={goPrev} type='button' className='accent-btn__transparent'>
            Previous
            <i className='pi pi-chevron-left'/>
          </button>
          <button disabled={!(values.experienceRequired)} onClick={goNext} type='button' className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step5;
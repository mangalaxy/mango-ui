import React from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import RequiredNotice from '../RequiredNitice';
import FKMultiselect from '../../../Fields/FKDropdown/FKMultiselect';
import {industries} from '../../../../constants/optionValues';

const Step4 = ({goNext, goPrev}) => {
  const {values, errors, touched} = useFormikContext();

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <RequiredNotice/>
          <h3 className='profileBuilderTitle'>Skills</h3>
          <div className="fieldsContainer">
            <div className="fieldsColumn fullSize">
              <label className='fieldLabel'>Which skills your potential employee
                should have?</label>
              <Field
                  component={FKMultiselect}
                  options={industries}
                  name="skills"
                  placeholder='Skills'
                  showHeader
                  chip
                  multiline
              />
            </div>
          </div>
        </div>


        <div className='profileBuilderButtonsContainer'>
          <button onClick={goPrev} type='button'
                  className='accent-btn__transparent'>
            Previous
            <i className='pi pi-chevron-left'/>
          </button>
          <button disabled={!(values.skills)} onClick={goNext}
                  type='button' className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step4;
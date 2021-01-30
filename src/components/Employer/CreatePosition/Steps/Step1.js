import React from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import TextInput from '../../../Fields/CommonTextInput/TextInput';
import FKDropdown from '../../../Fields/FKDropdown/FKDropdown';
import {industries} from '../../../../constants/optionValues';
import FKMultiselect from '../../../Fields/FKDropdown/FKMultiselect';
import RequiredNotice from '../RequiredNitice';

const Step1 = ({goNext}) => {
  const {values, errors} = useFormikContext();
  const isValid = () => (
      values.title && values.jobRole && values.jobRoleTitle &&
      !(errors.title || errors.jobRole || errors.jobRoleTitle)
  );

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <RequiredNotice/>
          <h3 className='profileBuilderTitle'>position’s name</h3>

          <div className="fieldsContainer">
            <div className="fieldsColumn">
              <label className='fieldLabel'>Position</label>
              <Field
                  component={TextInput}
                  inputClassName='textFiled'
                  name="title"
                  placeholder='Position title'
              />

              <label className='fieldLabel'>Job role</label>
              <Field
                  component={FKDropdown}
                  options={industries}
                  name="jobRole"
                  placeholder='Roles'
              />

              <label className='fieldLabel'>Select up to maximum 3
                specialties</label>
              <Field
                  component={FKMultiselect}
                  options={industries}
                  name="jobRoleTitle"
                  placeholder='Specialties'
              />

            </div>

            <div className="fieldsColumn">
              <label className='fieldLabel'>In which industry will the employee
                work?</label>
              <Field
                  component={FKDropdown}
                  options={industries}
                  name="industry"
                  placeholder='Industry'
              />
            </div>
          </div>


        </div>
        <div className='profileBuilderButtonsContainer'>
          <button disabled={!isValid()} onClick={goNext} type='button'
                  className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step1;
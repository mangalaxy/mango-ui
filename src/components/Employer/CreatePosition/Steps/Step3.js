import React, {useState, useEffect} from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import FKDropdown from '../../../Fields/FKDropdown/FKDropdown';
import {industries} from '../../../../constants/optionValues';

const Step3 = ({goNext, goPrev}) => {
  const {values, errors, touched}= useFormikContext();
  const [countries, setCountries] = useState([]);

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <h5 className='requiredAttention'>
            All fields are required unless otherwise stated.
          </h5>
          <h3 className='profileBuilderTitle'>Position location</h3>
          <div className="fieldsContainer">
            <div className="fieldsColumn">
              <label className='fieldLabel'>Where is the vacancy open?</label>
              <Field
                  component={FKDropdown}
                  options={industries}
                  name="location"
                  placeholder='Industry'
              />
            </div>
            <div className="fieldsColumn">

            </div>
          </div>
          <div className="fieldsContainer">
            <div className="fieldsColumn">

            </div>
            <div className="fieldsColumn">

            </div>
          </div>
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

export default Step3;
import React, {useState, useEffect} from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import FKDropdown from '../../../Fields/FKDropdown/FKDropdown';
import {industries} from '../../../../constants/optionValues';
import FKRadioGroup from '../../../Fields/FKRadioGroup/FKRadioGroup';

const Step3 = ({goNext, goPrev, cities, countries}) => {
  const {values, errors, touched} = useFormikContext();
  const booleanTypes = ['Yes', 'No'];
  const [countryCities, setCountryCities] = useState([cities]);

  useEffect(() => {
    setCountryCities(cities);
  }, [cities]);

  useEffect(() => {
    if (values.country) {
      setCountryCities(cities.filter(item => item.country === values.country));
    }
  }, [values.country]);

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
                  options={countries}
                  name="country"
                  placeholder='Country'
              />
              <Field
                  component={FKDropdown}
                  options={countryCities}
                  name="city"
                  placeholder='City'
              />

            </div>
            <div className="fieldsColumn">
              <label className='fieldLabel'>Would you consider candidate’s
                relocation?</label>
              <Field
                  component={FKRadioGroup}
                  inputClassName='textFiled'
                  name="relocation"
                  options={booleanTypes}
              />
            </div>
          </div>
          <div className="fieldsContainer">
            <div className="fieldsColumn">
              <label className='fieldLabel'>Would you consider remote
                candidate?</label>
              <Field
                  component={FKRadioGroup}
                  inputClassName='textFiled'
                  name="remote"
                  options={booleanTypes}
              />
            </div>
            <div className="fieldsColumn">
              <label className='fieldLabel'>Will you provide sponsorship for
                working visa?</label>
              <Field
                  component={FKRadioGroup}
                  inputClassName='textFiled'
                  name="visaSponsorship"
                  options={booleanTypes}
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
          <button disabled={!(values.city)} onClick={goNext}
                  type='button' className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step3;
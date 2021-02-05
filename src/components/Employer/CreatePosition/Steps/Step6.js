import React from 'react';
import './Steps.scss';
import {Field, FieldArray, useFormikContext} from 'formik';
import RequiredNotice from '../RequiredNotice';
import FKDropdown from '../../../Fields/FKDropdown/FKDropdown';

const Step6 = ({goNext, goPrev}) => {
  const {values, errors, touched} = useFormikContext();

  const languages = [
    'Arabic',
    'Chinese',
    'English',
    'French',
    'German',
    'Japanese',
    'Russian',
    'Spanish',
  ];

  const levels = [
    'elementary',
    'pre-intermediate',
    'intermediate',
    'upper-intermediate',
    'fluent',
  ];

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <RequiredNotice/>
          <h3 className='profileBuilderTitle'>Languages</h3>
          <div className="fieldsColumn fullSize">
            <label className='fieldLabel'>What level of language proficiency is
              required?</label>
            <FieldArray
                name='languages'
                render={
                  arrayHelpers =>
                      <>
                        {values.languages?.length > 0 &&
                        values.languages.map((lang, index) => (
                            <div className='langItem'>
                              <Field
                                  component={FKDropdown}
                                  name={`languages.${index}[language]`}
                                  options={languages}
                                  placeholder='Language'
                              />
                              <Field
                                  component={FKDropdown}
                                  name={`languages.${index}[level]`}
                                  options={levels}
                                  placeholder='Level'
                              />
                              <button type='button' className='removeLang'
                                      onClick={() => arrayHelpers.remove(
                                          index)}>
                                <i className="pi pi-times-circle"/>
                              </button>
                            </div>
                        ))}
                        <button type='button' className='addLang'
                                onClick={() => arrayHelpers.push({})}>
                          <i className="pi pi-plus-circle"/>
                          Add language
                        </button>
                      </>
                }/>
          </div>

        </div>
        <div className='profileBuilderButtonsContainer'>
          <button onClick={goPrev} type='button'
                  className='accent-btn__transparent'>
            Previous
            <i className='pi pi-chevron-left'/>
          </button>
          <button onClick={goNext}
                  type='button' className='accent-btn'>
            Next
            <i className='pi pi-chevron-right'/>
          </button>
        </div>
      </>
  );
};

export default Step6;
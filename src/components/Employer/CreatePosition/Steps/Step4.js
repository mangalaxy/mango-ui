import React, {useRef, useState} from 'react';
import './Steps.scss';
import {Field, useFormikContext} from 'formik';
import RequiredNotice from '../RequiredNotice';
import FKMultiselect from '../../../Fields/FKDropdown/FKMultiselect';
import {specializations} from '../../../../constants/optionValues';
import FKChipsInput from '../../../Fields/FKChipsInput/FKChipsInput';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

const Step4 = ({goNext, goPrev}) => {
  const {values, errors, touched, setFieldValue} = useFormikContext();
  const [newSkill, setNewSkill] = useState('');
  const skillInputRef = useRef(null);

  const handleAddSkill = () => {
    if (newSkill) {
      setFieldValue('additionalSkills',
          [...values.additionalSkills || [], newSkill]);
      setNewSkill('');
      if(skillInputRef.current?.element)skillInputRef.current.element.focus()}
  };

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
                  options={specializations}
                  name="skills"
                  placeholder='Skills'
                  showHeader
                  chip
                  multiline
              />

              <label className='fieldLabel'>Additional skills</label>
              {!!values.additionalSkills?.length &&<Field
                  component={FKChipsInput}
                  name="additionalSkills"
                  disabled={!values.additionalSkills?.length}
              />}
              <div className='addSkill'>
                <InputText value={newSkill} className='skillInput'
                           onChange={(e) => setNewSkill(e.target.value)}
                ref={skillInputRef}/>
                <Button type='button' label='Add' onClick={handleAddSkill}/>
              </div>
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
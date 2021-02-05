import React, {useEffect, useState} from 'react';
import './Steps.scss';
import {useFormikContext} from 'formik';
import {experienceLevels} from '../../../../constants/optionValues';
import commonService from '../../../../services/commonService';

const Confirmation = ({goNext, goPrev}) => {
  const {handleSubmit, isValid, isSubmitting, values} = useFormikContext();
  const [location, setLocation] = useState();

  const renderDescription = () => {
    if (values.description) {
      const blocks = values.description.split('\n');
      return blocks.map(
          (item, i) => <p key={i} className='jobDescription'>{item}<br/></p>);
    }
    return <span> - </span>;
  };

  useEffect(() => {
    if (values?.city) {
      commonService.getLocation(values.city).
          then(res => setLocation(res.data)).
          catch(err => null);
    }
  }, [values]);

  return (
      <>
        <div className='profileBuilderFieldsContainer preview'>
          <h3 className='profileBuilderTitle'>Does this look correct?</h3>

          <div className="fieldsContainer">
            <div>
              <span className='previewTitle'>Position</span>
              <p>{values.title}</p>
            </div>
          </div>

          <div className="fieldsContainer">
            <div className='fieldsColumn'>
              <span className='previewTitle'>Role</span>
              <p>{values.jobRole}</p>
            </div>
            <div className='fieldsColumn'>
              <span className='previewTitle'>Specialization</span>
              <p>{values.jobSpecialities}</p>
            </div>
            <div className='fieldsColumn'>
              <span className='previewTitle'>Employment Type</span>
              <p>{values.jobType}</p>
            </div>
            <div className='fieldsColumn'>
              <span className='previewTitle'>Years of experience</span>
              <p>{experienceLevels.find(
                  el => el.value === values.experienceRequired)?.label}</p>
            </div>
          </div>

          <div className="fieldsContainer">
            <div className='fieldsColumn'>
              <span className='previewTitle'>Location</span>
              <p>{location?.city}/{location?.country}</p>
            </div>
            <div className='fieldsColumn'>
              <span className='previewTitle'>Relocation</span>
              <p>{values.relocation ? 'Yes' : 'No'}</p>
            </div>
            <div className='fieldsColumn'>
              <span className='previewTitle'>Remote</span>
              <p>{values.remote ? 'Yes' : 'No'}</p>
            </div>
            <div className='fieldsColumn'>
              <span className='previewTitle'>Visa Sponsorship</span>
              <p>{values.visaSponsorship ? 'Yes' : 'No'}</p>
            </div>
          </div>

          <div className="fieldsContainer">
            <div>
              <span className='previewTitle'>Skills</span>
              <p>{values.skills}</p>
            </div>
          </div>

          <div className="fieldsContainer">
            <div>
              <span className='previewTitle'>Additional skills</span>
              <p>{values?.additionalSkills&&Array.isArray(values.additionalSkills)
              &&values.additionalSkills.join(', ')}</p>
            </div>
          </div>

          <div className="fieldsContainer">
            <div>
              <span className='previewTitle'>Languages</span>
              {values?.languages?.map?.((item,i)=>(<p key={i}>{item.language} - {item.level}</p>))}
            </div>
          </div>

          <div className="fieldsContainer">
            <div>
              <span className='previewTitle'>Description</span>
              {renderDescription()}
            </div>
          </div>

        </div>
        <div className='profileBuilderButtonsContainer'>
          <button onClick={goPrev} type='button'
                  className='accent-btn__transparent'>
            Previous
            <i className='pi pi-chevron-left'/>
          </button>
          <button disabled={!isValid || isSubmitting} onClick={handleSubmit}
                  type='submit' className='accent-btn'>Save
          </button>
        </div>
      </>
  );
};

export default Confirmation;
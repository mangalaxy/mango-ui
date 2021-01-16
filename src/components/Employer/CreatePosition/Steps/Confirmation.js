import React from 'react';
import './Steps.scss';
import {useFormikContext} from 'formik';

const Confirmation = ({goNext, goPrev}) => {
  const {handleSubmit, isValid, isSubmitting, values} = useFormikContext();
  const result = () =>{
    let res = null;
    for(let key in values){
      res += `${key}: ${values[key]}\n`;
    }
    return res
  }

  return (
      <>
        <div className='profileBuilderFieldsContainer'>
          <h3 className='profileBuilderTitle'>Does this look correct?</h3>
          {result()}
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
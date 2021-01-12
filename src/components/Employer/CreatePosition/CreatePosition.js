import React, {useState, useEffect} from 'react';
import './CreatePosition.scss';
import {Timeline} from 'primereact/timeline';
import {Formik, Form} from 'formik';
import StepItem from './StepItem/StepItem';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Confirmation from './Steps/Confirmation';
import Step6 from './Steps/Step6';
import Step5 from './Steps/Step5';
import Step4 from './Steps/Step4';
import Step3 from './Steps/Step3';

const CreatePosition = () => {
  const [steps, setSteps] = useState([
    {complete: false, current: true, label: '1'},
    {complete: false, current: false, label: '2'},
    {complete: false, current: false, label: '3'},
    {complete: false, current: false, label: '4'},
    {complete: false, current: false, label: '5'},
    {complete: false, current: false, label: '6'},
  ]);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const newSteps = steps.map((step, index) => ({
      ...step,
      complete: index < activeStep,
      current: index === activeStep,
    }));
    setSteps(newSteps);
  }, [activeStep]);

  const goNext = () => {
    setActiveStep(activeStep + 1);
  };
  const goPrev = () => {
    setActiveStep(activeStep - 1);
  };

  return (
      <div className='cretePositionPage'>
        <div className='pageContainer'>
          {activeStep<6 && <div className="progressBarContainer">
            <Timeline value={steps} marker={StepItem}/>
          </div>}

          <Formik initialValues={{positionName: '', email: ''}}
                  onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}>
            <Form style={{width: '100%'}}>
              <div className="contentContainer">
                {activeStep === 0 && <Step1 goNext={goNext} goPrev={goPrev}/>}
                {activeStep === 1 && <Step2 goNext={goNext} goPrev={goPrev}/>}
                {activeStep === 2 && <Step3 goNext={goNext} goPrev={goPrev}/>}
                {activeStep === 3 && <Step4 goNext={goNext} goPrev={goPrev}/>}
                {activeStep === 4 && <Step5 goNext={goNext} goPrev={goPrev}/>}
                {activeStep === 5 && <Step6 goNext={goNext} goPrev={goPrev}/>}
                {activeStep === 6 && <Confirmation goNext={goNext} goPrev={goPrev}/>}
              </div>
            </Form>
          </Formik>


        </div>

      </div>
  );
};

export default CreatePosition;
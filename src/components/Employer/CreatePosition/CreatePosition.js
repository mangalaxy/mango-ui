import React, {useState, useEffect} from 'react';
import './CreatePosition.scss';
import {Timeline} from 'primereact/timeline';
import StepItem from './StepItem/StepItem';

const CreatePosition = () => {
  const [steps, setSteps] = useState([
    {complete: false, current: true, label: '1'},
    {complete: false, current: false, label: '2'},
    {complete: false, current: false, label: '3'},
    {complete: false, current: false, label: '4'},
    {complete: false, current: false, label: '5'},
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


  return (
      <div className='cretePositionPage'>
        <div className='pageContainer'>
          <div className="progressBarContainer">
            <Timeline value={steps} marker={StepItem}/>
          </div>
          <div className="contentContainer">
            <button onClick={() => setActiveStep(activeStep + 1)}>step +</button>
          </div>

        </div>

      </div>
  );
};

export default CreatePosition;
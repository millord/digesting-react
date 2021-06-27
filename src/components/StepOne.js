const StepOne = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return <h1>Step 1</h1>;
};

export default StepOne;

const StepThree = ({ currentStep }) => {
  if (currentStep !== 3) {
    return null;
  }

  return <h1>Step 3 Component</h1>;
};

export default StepThree;

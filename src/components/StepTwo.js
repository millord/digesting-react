const StepTwo = ({ currentStep }) => {
  if (currentStep !== 2) {
    return null;
  }

  return (
    <div>
      <h1>Step 2</h1>
    </div>
  );
};

export default StepTwo;

const StepTwo = ({ currentStep, username, handleChange }) => {
  if (currentStep !== 2) {
    return null;
  }

  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
    </div>
  );
};

export default StepTwo;

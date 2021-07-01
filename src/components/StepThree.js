const StepThree = ({ currentStep, password, handleChange }) => {
  if (currentStep !== 3) {
    return null;
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="text"
          value={password}
          onChange={handleChange}
          placeholder="password"
        />
      </div>
      <button className="btn btn-success float-right">Sign up</button>
    </>
  );
};

export default StepThree;

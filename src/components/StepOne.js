const StepOne = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        className="form-control"
        name="email"
        type="text"
        placeholder="Enter Email"
        value={props.email}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default StepOne;

import React from "react";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
    };
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep,
    });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={this.prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          type="button"
          className="btn btn-primary float-left"
          onClick={this.next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, username } = this.state;
    alert(`Your registration detail: \n
          Email: ${email} \n
          Username: ${username} \n
           Password: ${password}`);
  };

  render() {
    console.log(this.state.currentStep);
    return (
      <>
        <div className="wizard">
          <h1>React Wizard Form</h1>
          <p>Current Step {this.state.currentStep}</p>
          <form onSubmit={this.handleSubmit}>
            <StepOne
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
            />
            <StepTwo
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              username={this.state.username}
            />
            <StepThree
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              password={this.state.password}
            />
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </div>
      </>
    );
  }
}

export default MasterForm;

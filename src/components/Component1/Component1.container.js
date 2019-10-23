/*eslint-disable*/
import React, { Component } from 'react';
import Component1 from './Component1';
import { connect } from 'react-redux';
import {
  setCreditCardNumber,
  setCVV,
  setExpirationDate,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
} from '../../store/form/actions';
import { onSubmit, showDetails } from '../../store/details/actions';
import { RequestStatus } from '../../utils/RequestStatus';

class Component1Container extends Component {
  render() {
    return (
      <Component1
        isFormSubmitted={this.props.isFormSubmitted}
        isFormShown={this.props.isFormShown}
        creditCardNumber={this.props.creditCardNumber}
        cvv={this.props.cvv}
        expirationDate={this.props.expirationDate}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        secretQuestin={this.props.secretQuestion}
        secretAnswer={this.props.secretAnswer}
        setCreditCardNumber={this.props.setCreditCardNumber}
        setCVV={this.props.setCVV}
        setExpirationDate={this.props.setExpirationDate}
        setFirstName={this.props.setFirstName}
        setLastName={this.props.setLastName}
        setSecretQuestion={this.props.setSecretQuestion}
        setSecretAnswer={this.props.setSecretAnswer}
        onSubmit={this.props.onSubmit}
        showDetails={this.props.showDetails}
        isError={this.props.isError}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isFormShown: state.details.isFormShown,
    isFormSubmitted: state.details.isFormSubmitted,
    creditCardNumber: state.form.creditCardNumber,
    cvv: state.form.cvv,
    expirationDate: state.form.expirationDate,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    secretQuestion: state.form.secretQuestion,
    secretAnswer: state.form.secretAnswer,
    isError: state.details.requestStatus === RequestStatus.Failure,
  };
};
const mapDispatchToProps = {
  setCreditCardNumber,
  setCVV,
  setExpirationDate,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
  onSubmit,
  showDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component1Container);

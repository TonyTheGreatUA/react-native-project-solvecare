//@flow
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
  submitCreditCardInfo,
  validateCreditCard,
} from '../../store/creditCardInfo/actions';
import { RequestStatus } from '../../utils/RequestStatus';

type Props = {
  onCreditCardNumberChange: (value: string) => void,
  onCvvChange: (value: string) => void,
  onExpirationDateChange: (value: string) => void,
  onFirstNameChange: (value: string) => void,
  onLastNameChange: (value: string) => void,
  onSecretQuestionChange: (value: string) => void,
  onSecretAnswerChange: (value: string) => void,
};

type State = {
  isError: boolean,
  isFormShown: boolean,
  creditCardNumber: string,
  cvv: string,
  expirationDate: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  setCreditCardNumber: () => void,
  setCVV: () => void,
  setExpirationDate: () => void,
  setFirstName: () => void,
  setLastName: () => void,
  setSecretQuestion: () => void,
  setSecretAnswer: () => void,
  submitCreditCardInfo: () => void,
  validateCreditCard: () => void,
};

class Component1Container extends Component<State, Props> {
  render() {
    return (
      <Component1
        isFormShown={this.props.isFormShown}
        creditCardNumber={this.props.creditCardNumber}
        cvv={this.props.cvv}
        expirationDate={this.props.expirationDate}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        secretQuestion={this.props.secretQuestion}
        secretAnswer={this.props.secretAnswer}
        setCreditCardNumber={this.props.setCreditCardNumber}
        setCVV={this.props.setCVV}
        setExpirationDate={this.props.setExpirationDate}
        setFirstName={this.props.setFirstName}
        setLastName={this.props.setLastName}
        setSecretQuestion={this.props.setSecretQuestion}
        setSecretAnswer={this.props.setSecretAnswer}
        onSubmit={this.props.submitCreditCardInfo}
        showDetails={this.props.validateCreditCard}
        isError={this.props.isError}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isFormShown: state.creditInfo.isFormShown,
    creditCardNumber: state.creditInfo.creditCardNumber,
    cvv: state.creditInfo.cvv,
    expirationDate: state.creditInfo.expirationDate,
    firstName: state.creditInfo.firstName,
    lastName: state.creditInfo.lastName,
    secretQuestion: state.creditInfo.secretQuestion,
    secretAnswer: state.creditInfo.secretAnswer,
    isError: state.creditInfo.requestStatus === RequestStatus.Failure,
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
  submitCreditCardInfo,
  validateCreditCard,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component1Container);

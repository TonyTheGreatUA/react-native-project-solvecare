//@flow

import React, { Component } from 'react';
import Component1 from './Component1';
import { connect } from 'react-redux';
import { submitCreditCardInfo, validateCreditCard } from '../../store/creditCardInfo/actions';
import { RequestStatus } from '../../utils/RequestStatus';
type CustomType = {};

type Props = {
  isError: boolean,
  isFormShown: boolean,
  isSubmitted: boolean,
  isClickDisabled: boolean,
  submitCreditCardInfo: (
    creditCardNumber: string,
    cvv: string,
    expirationDate: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
    isSubmitClicked: boolean,
  ) => void,
  validateCreditCard: () => void,
};

type State = {
  creditCardNumber: string,
  cvv: string,
  expirationDate: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  isSubmitClicked: boolean,
  isSubmitted: boolean,
  isClickDisabled: boolean,
};

class Component1Container extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      creditCardNumber: '',
      cvv: '',
      expirationDate: '',
      firstName: '',
      lastName: '',
      secretQuestion: '',
      secretAnswer: '',
      isSubmitClicked: false,
      isSubmitted: true,
      isClickDisabled: false,
    };
    this.handleCardSubmit = this.handleCardSubmit.bind(this);
    this.handleCardInput = this.handleCardInput.bind(this);
  }

  handleCardInput = (key: string, val: string) => {
    this.setState({ [key]: val, isSubmitClicked: false });
  };

  handleCardSubmit = () => {
    const {
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
      isSubmitClicked,
    } = this.state;
    const { isError } = this.props;

    this.props.submitCreditCardInfo(
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
      true,
    );

    this.setState({
      isSubmitted: false,
      isClickDisabled: true,
      isSubmitClicked: true,
    });
  };
  componentDidUpdate() {
    const { isError } = this.props;
    isError
      ? this.setState({
          isSubmitted: true,
          isClickDisabled: false,
        })
      : '';
  }
  render() {
    return (
      <Component1
        handleCardInput={this.handleCardInput}
        handleCardSubmit={this.handleCardSubmit}
        isClickDisabled={this.state.isClickDisabled}
        isSubmitted={this.state.isSubmitted}
        validateCreditCard={this.props.validateCreditCard}
        isError={this.props.isError}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isError: state.creditInfo.requestStatus === RequestStatus.Failure,
  };
};
const mapDispatchToProps = {
  submitCreditCardInfo,
  validateCreditCard,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component1Container);

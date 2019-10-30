//@flow

import React, { Component, useState, useCallback } from 'react';
import Component1 from './Component1';
import { connect } from 'react-redux';
import { submitCreditCardInfo, validateCreditCard } from '../../store/creditCardInfo/actions';
import { RequestStatus } from '../../utils/RequestStatus';
type CustomType = {};

type Props = {
  isError: boolean,
  isFormShown: boolean,
  isEditable: boolean,
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
  validateCreditCard: (items: any) => void,
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
  isEditable: boolean,
};

class Component1container extends React.PureComponent<Props, State> {
  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
    isSubmitClicked: false,
    isEditable: true,
  };

  handleCardInput = (name: string) => {
    return val => this.setState({ [name]: val });
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
      isEditable: false,
      isSubmitClicked: true,
    });
  };
  componentDidUpdate() {
    const { isError } = this.props;
    isError
      ? this.setState({
          isEditable: true,
          isSubmitClicked: false,
        })
      : '';
  }
  handleSubmit = () => {
    const items = this.state;
    this.props.validateCreditCard(items);
    this.handleCardSubmit();
  };
  render() {
    return (
      <Component1
        handleCardInput={this.handleCardInput}
        handleSubmit={this.handleSubmit}
        isSubmitClicked={this.state.isSubmitClicked}
        isEditable={this.state.isEditable}
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
)(Component1container);

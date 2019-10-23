/*eslint-disable*/
import React, { Component } from 'react';
import Component2 from './Component2';
import { connect } from 'react-redux';
import { RequestStatus } from '../../utils/RequestStatus';

export class Component2Container extends Component {
  state = {
    cardType: '',
  };

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.creditCardNumber !== this.props.creditCardNumber) {
      this.getCardType();
    }
  };
  getCardType = () => {
    const { creditCardNumber } = this.props;
    let cardType;

    creditCardNumber.length === 16 && Number(creditCardNumber.slice(-4)) > 2000
      ? (cardType = 'MasterCard')
      : creditCardNumber.length === 16 && Number(creditCardNumber.slice(-4)) < 2000
      ? (cardType = 'Visa')
      : (cardType = '');

    this.setState({
      cardType,
    });
  };

  render() {
    return (
      <Component2
        creditCardNumber={this.props.creditCardNumber}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        cardType={this.state.cardType}
        isFormShown={this.props.isFormShown}
        isLoading={this.props.isLoading}
        isError={this.props.isError}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    creditCardNumber: state.form.creditCardNumber,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    isFormShown: state.details.isFormShown,
    isLoading: state.details.requestStatus === RequestStatus.Request,
    isError: state.details.requestStatus === RequestStatus.Failure,
  };
};

export default connect(mapStateToProps)(Component2Container);

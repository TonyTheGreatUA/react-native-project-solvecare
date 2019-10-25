//@flow

import React, { Component } from 'react';
import Component2 from './Component2';
import { connect } from 'react-redux';
import { RequestStatus } from '../../utils/RequestStatus';

type State = {
  cardType: string,
};
type Props = {
  creditCardNumber: string,
  firstName: string,
  lastName: string,
  isSubmitClicked: boolean,
  isLoading: boolean,
  isError: boolean,
};

export class Component2Container extends Component<Props, State> {
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
        isLoading={this.props.isLoading}
        isError={this.props.isError}
        isSubmitClicked={this.props.isSubmitClicked}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    creditCardNumber: state.creditInfo.creditCardNumber,
    firstName: state.creditInfo.firstName,
    lastName: state.creditInfo.lastName,
    isLoading: state.creditInfo.requestStatus === RequestStatus.Request,
    isError: state.creditInfo.requestStatus === RequestStatus.Failure,
    isSubmitClicked: state.creditInfo.isSubmitClicked,
  };
};

export default connect(mapStateToProps)(Component2Container);

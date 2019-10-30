import React, { useState, useEffect } from 'react';
import Component2 from './Component2';
import { connect, useSelector } from 'react-redux';
import { RequestStatus } from '../../utils/RequestStatus';

const Component2Container = () => {
  const { cardType, setCardType } = useState('');
  const isError = useSelector(state => state.isError);
  const isLoading = useSelector(state => state.isError);
  const creditCardNumber = useSelector(state => state.creditCardNumber);
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  const isSubmitClicked = useSelector(state => state.isSubmitClicked);

  useEffect(() => {
    {
      this.getCardType();
    }
  }, [creditCardNumber]);

  const getCardType = () => {
    let cardType;

    creditCardNumber.length === 16 && Number(creditCardNumber.slice(-4)) > 2000
      ? (cardType = 'MasterCard')
      : creditCardNumber.length === 16 && Number(creditCardNumber.slice(-4)) < 2000
      ? (cardType = 'Visa')
      : (cardType = '');

    setCardType(cardType);
  };

  return (
    <Component2
      creditCardNumber={creditCardNumber}
      firstName={firstName}
      lastName={lastName}
      cardType={cardType}
      isLoading={isLoading}
      isError={isError}
      isSubmitClicked={isSubmitClicked}
    />
  );
};

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

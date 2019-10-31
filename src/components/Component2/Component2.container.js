import React, { useState, useEffect } from 'react';
import Component2 from './Component2';
import { connect, useSelector } from 'react-redux';
import { RequestStatus } from '../../utils/RequestStatus';

const Component2Container = () => {
  const [cardType, setCardType] = useState('');
  const isError = useSelector(state => state.isError);
  const isLoading = useSelector(state => state.isLoading);
  const creditCardNumber = useSelector(state => state.creditInfo.creditCardNumber);
  const firstName = useSelector(state => state.creditInfo.firstName);
  const lastName = useSelector(state => state.creditInfo.lastName);
  const isSubmitClicked = useSelector(state => state.creditInfo.isSubmitClicked);

  useEffect(() => {
    {
      getCardType();
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

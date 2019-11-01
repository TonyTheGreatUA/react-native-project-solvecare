import React, { Component, useState, useCallback, useEffect } from 'react';
import Component1 from '../components/Component1/Component1';
import { connect, useSelector, useDispatch } from 'react-redux';
import { submitCreditCardInfo, validateCreditCard } from '../store/creditCardInfo/actions';
import { RequestStatus } from '../utils/RequestStatus';

const useComponent2 = () => {
  const [cardType, setCardType] = useState('');
  const isError = useSelector(state => state.creditInfo.requestStatus === RequestStatus.Failure);
  const isLoading = useSelector(state => state.creditInfo.requestStatus === RequestStatus.Request);
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

  return {
    creditCardNumber,
    firstName,
    lastName,
    cardType,
    isLoading,
    isError,
    isSubmitClicked,
  };
};

export default useComponent2;

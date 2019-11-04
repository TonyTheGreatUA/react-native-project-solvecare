import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RequestStatus } from '../../utils/RequestStatus';

const useComponent2 = () => {
  const [cardType, setCardType] = useState('');
  const isError = useSelector(state => state.creditInfo.requestStatus === RequestStatus.Failure);
  const isLoading = useSelector(state => state.creditInfo.requestStatus === RequestStatus.Request);
  const creditCardNumber = useSelector(state => state.creditInfo.creditCardNumber);
  const firstName = useSelector(state => state.creditInfo.firstName);
  const lastName = useSelector(state => state.creditInfo.lastName);
  const isSubmitClicked = useSelector(
    state => state.creditInfo.requestStatus === RequestStatus.Success,
  );

  useEffect(() => {
    {
      getCardType();
    }
  }, [creditCardNumber]);

  const getCardType = useCallback(() => {
    let cardType;

    creditCardNumber.length === 16 && Number(creditCardNumber.slice(-4)) > 2000
      ? (cardType = 'MasterCard')
      : creditCardNumber.length === 16 && Number(creditCardNumber.slice(-4)) < 2000
      ? (cardType = 'Visa')
      : (cardType = '');
    setCardType(cardType);
  }, [creditCardNumber]);

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

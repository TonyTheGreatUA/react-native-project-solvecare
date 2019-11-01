import React, { Component, useState, useCallback, useEffect } from 'react';
import Component1 from '../components/Component1/Component1';
import { connect, useSelector, useDispatch } from 'react-redux';
import { submitCreditCardInfo, validateCreditCard } from '../store/creditCardInfo/actions';
import { RequestStatus } from '../utils/RequestStatus';

const useComponent1 = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [secretQuestion, setSecretQuestion] = useState('');
  const [secretAnswer, setSecretAnswer] = useState('');
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const isError = useSelector(state => state.creditInfo.requestStatus === RequestStatus.Failure);

  const dispatch = useDispatch();

  const items = {
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretAnswer,
    secretQuestion,
  };

  const handleCardSubmit = () => {
    dispatch(
      submitCreditCardInfo(
        creditCardNumber,
        cvv,
        expirationDate,
        firstName,
        lastName,
        secretQuestion,
        secretAnswer,
        isSubmitClicked,
      ),
    );
    setIsSubmitClicked(true);
    setIsEditable(false);
  };

  useEffect(() => {
    if (isError) {
      setIsEditable(true);
      setIsSubmitClicked(false);
    }
  }, [
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretAnswer,
    secretQuestion,
    isEditable,
    isSubmitClicked,
  ]);

  handleSubmit = () => {
    dispatch(validateCreditCard(items));
    handleCardSubmit();
  };

  return {
    setCreditCardNumber,
    setCVV,
    setExpirationDate,
    setFirstName,
    setLastName,
    setSecretQuestion,
    setSecretAnswer,
    creditCardNumber,
    firstName,
    lastName,
    handleSubmit,
    isSubmitClicked,
    isEditable,
    isError,
  };
};

export default useComponent1;

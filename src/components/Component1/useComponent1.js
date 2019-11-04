//@flow
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitCreditCardInfo, validateCreditCard } from '../../store/creditCardInfo/actions';
import { RequestStatus } from '../../utils/RequestStatus';

const useComponent1 = () => {
  const [cardData, setCardData] = useState({
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
  });
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const isError = useSelector(state => state.creditInfo.requestStatus === RequestStatus.Failure);

  const dispatch = useDispatch();

  const handleTextInput = useCallback(
    (name: string) => {
      return (value: string) => setCardData({ ...cardData, [name]: value });
    },
    [cardData],
  );

  const handleCardSubmit = useCallback(() => {
    dispatch(
      submitCreditCardInfo(
        cardData.creditCardNumber,
        cardData.cvv,
        cardData.expirationDate,
        cardData.firstName,
        cardData.lastName,
        cardData.secretQuestion,
        cardData.secretAnswer,
        isSubmitClicked,
      ),
    );
    setIsSubmitClicked(true);
    setIsEditable(false);
  }, [
    cardData.creditCardNumber,
    cardData.cvv,
    cardData.expirationDate,
    cardData.firstName,
    cardData.lastName,
    cardData.secretQuestion,
    cardData.secretAnswer,
    isSubmitClicked,
  ]);

  useEffect(() => {
    if (isError) {
      setIsEditable(true);
      setIsSubmitClicked(false);
    }
  }, [
    cardData.creditCardNumber,
    cardData.cvv,
    cardData.expirationDate,
    cardData.firstName,
    cardData.lastName,
    cardData.secretAnswer,
    cardData.secretQuestion,
    isEditable,
    isSubmitClicked,
  ]);

  const handleSubmit = useCallback(() => {
    dispatch(validateCreditCard(cardData));
    handleCardSubmit();
  }, [cardData]);

  return {
    handleTextInput,
    handleSubmit,
    isSubmitClicked,
    isEditable,
    isError,
  };
};

export default useComponent1;

import React, { Component, useState, useCallback, useEffect } from 'react';
import Component1 from './Component1';
import { connect, useSelector, useDispatch } from 'react-redux';
import { submitCreditCardInfo, validateCreditCard } from '../../store/creditCardInfo/actions';
import { RequestStatus } from '../../utils/RequestStatus';

const Component1Container = () => {
  const [name, setValue] = useState({
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
  });
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const isError = useSelector(state => state.isError);
  const dispatch = useDispatch();

  handleCardInput = (name: string) => {
    return val => setValue({ [name]: val });
  };

  handleCardSubmit = () => {
    /*const {
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
      isSubmitClicked,
    } = this.state;

    submitCreditCardInfo(
      creditCardNumber,
      cvv,
      expirationDate,
      firstName,
      lastName,
      secretQuestion,
      secretAnswer,
      true,
    );*/

    setIsEditable(false);
    setIsSubmitClicked(true);
  };

  useEffect(() => {
    isError ? setIsEditable(true) && setIsSubmitClicked(false) : '';
  }, [name, isEditable, isSubmitClicked]);

  handleSubmit = () => {
    const items = this.state;
    /*dispatch.validateCreditCard(items);*/
    this.handleCardSubmit();
  };

  return (
    <Component1
      handleCardInput={this.handleCardInput}
      handleSubmit={this.handleSubmit}
      isSubmitClicked={isSubmitClicked}
      isEditable={isEditable}
      isError={isError}
    />
  );
};

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

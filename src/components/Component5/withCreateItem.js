//@flow
import React from 'react';
import { StyleSheet } from 'react-native';
import Component5View from './Component5.view';

const withCreateItem = () => {
  const crudStyles = StyleSheet.create({
    button: {
      backgroundColor: '#00FF00',
      padding: 15,
    },
    title: {
      color: '#00FF00',
    },
  });

  const formTitle = 'Product Create';
  const buttonTitle = 'Create Item';

  return <Component5View formStyle={crudStyles} formTitle={formTitle} buttonTitle={buttonTitle} />;
};

export default withCreateItem;

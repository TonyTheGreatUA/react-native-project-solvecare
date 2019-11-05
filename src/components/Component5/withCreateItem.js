//@flow
import React from 'react';
import { StyleSheet } from 'react-native';
import Component5View from './Component5.view';
type Props = {
  itemData: {
    title: string,
    weight: string,
    size: string,
    country: string | number,
    isCreated: boolean,
  },
};

const withCreateItem = ({ itemData }: Props) => {
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

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

const withEditItem = ({ itemData }: Props) => {
  const crudStyles = StyleSheet.create({
    button: {
      backgroundColor: '#0000FF',
      padding: 15,
    },
    title: {
      color: '#0000FF',
    },
  });

  const formTitle = 'Product Edit';
  const buttonTitle = 'Edit Item';

  return <Component5View formStyle={crudStyles} formTitle={formTitle} buttonTitle={buttonTitle} />;
};

export default withEditItem;

//@flow
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Component5View from './Component5.view';

type Props = {
  updateItem: () => void,
  itemData: {
    title: string,
    weight: string,
    size: string,
    country: string | number,
    isCreated: boolean,
  },
  isCreated: boolean,
};

const withEditItem = ({ updateItem, itemData, isCreated }: Props) => {
  const crudStyles = StyleSheet.create({
    button: {
      backgroundColor: '#0000FF',
      padding: 15,
    },
    title: {
      color: '#0000FF',
    },
  });

  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const formTitle = 'Product Edit';
  const buttonTitle = 'Edit Item';

  return (
    <Component5View
      isCreated={isCreated}
      updateItem={updateItem}
      isDataUpdated={isDataUpdated}
      setIsDataUpdated={setIsDataUpdated}
      formStyle={crudStyles}
      formTitle={formTitle}
      itemInfo={itemData}
      buttonTitle={buttonTitle}
    />
  );
};

export default withEditItem;

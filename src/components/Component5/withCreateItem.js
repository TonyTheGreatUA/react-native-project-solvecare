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
};

const withCreateItem = ({ itemData, updateItem }: Props) => {
  const crudStyles = StyleSheet.create({
    button: {
      backgroundColor: '#00FF00',
      padding: 15,
    },
    title: {
      color: '#00FF00',
    },
  });
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const formTitle = 'Product Create';
  const buttonTitle = 'Create Item';

  return (
    <Component5View
      updateItem={updateItem}
      isDataUpdated={isDataUpdated}
      setIsDataUpdated={setIsDataUpdated}
      itemInfo={itemData}
      formStyle={crudStyles}
      formTitle={formTitle}
      buttonTitle={buttonTitle}
    />
  );
};

export default withCreateItem;

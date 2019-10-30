//@flow
import React, { Component, useState, useEffect } from 'react';
import Component6 from './Component6';
import styles from './Component6.style';
import { Text, TouchableOpacity, View } from 'react-native';

export const Component6Hooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [textInput, setTextinput] = useState('');
  const [isAddedDisabled, setIsAddedDisabled] = useState(true);
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(true);

  const makeRemoteRequest = () => {
    setIsLoading(true);

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.map(item => {
          item.isSelect = false;
          item.selectedClass = styles.list;

          return item;
        });

        setIsLoading(false);
        setDataSource(responseJson);
      })
      .catch(error => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    makeRemoteRequest();
  }, []);

  const FlatListItemSeparator = () => <View style={styles.line} />;

  const selectItem = (data: any) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list;

    const index = dataSource.findIndex(item => data.item.id === item.id);

    dataSource[index] = data.item;

    setDataSource(dataSource);
    setIsRemoveDisabled(!isRemoveDisabled);
  };

  const onCreateItem = () => {
    setDataSource([...dataSource, { id: '', title: textInput, isSelect: false }]);
    setTextinput('');
  };

  const onRemoveItem = () => {
    const newData = dataSource.filter(item => !item.isSelect);

    setDataSource(newData);
  };

  const onFocusTextInput = () => {
    setIsAddedDisabled(false);
  };

  const renderItem = (data: any) => (
    <TouchableOpacity
      style={[styles.list, data.item.selectedClass]}
      onPress={() => selectItem(data)}
    >
      <Text style={styles.lightText}>
        {data.item.name}
        {data.item.title}
      </Text>
    </TouchableOpacity>
  );

  const handleTextInput = () => {
    return (val: string) => setTextinput(val);
  };

  return (
    <Component6
      dataSource={dataSource}
      isLoading={isLoading}
      onFocusTextInput={onFocusTextInput}
      handleTextInput={handleTextInput}
      isAddedDisabled={isAddedDisabled}
      isRemoveDisabled={isRemoveDisabled}
      onCreateItem={onCreateItem}
      onRemoveItem={onRemoveItem}
      textInput={textInput}
      FlatListItemSeparator={FlatListItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default Component6Hooks;

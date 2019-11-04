import React, { useState, useEffect } from 'react';
import Component6 from './Component6';
import styles from './Component6.style';
import { Text, TouchableOpacity, View } from 'react-native';

export const useComponent6 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [textInput, setTextinput] = useState('');
  const [isAddedDisabled, setIsAddedDisabled] = useState(true);
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(true);

  const makeRemoteRequest = useCallback(() => {
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
  }, [dataSource]);

  useEffect(() => {
    makeRemoteRequest();
  }, []);

  const FlatListItemSeparator = () => <View style={styles.line} />;

  const selectItem = useCallback(
    (data: any) => {
      data.item.isSelect = !data.item.isSelect;
      data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list;

      const index = dataSource.findIndex(item => data.item.id === item.id);

      dataSource[index] = data.item;

      setDataSource(dataSource);
      setIsRemoveDisabled(!isRemoveDisabled);
    },
    [dataSource],
  );

  const onCreateItem = useCallback(() => {
    setDataSource([...dataSource, { id: '', title: textInput, isSelect: false }]);
    setTextinput('');
  }, [dataSource]);

  const onRemoveItem = useCallback(() => {
    const newData = dataSource.filter(item => !item.isSelect);

    setDataSource(newData);
  }, [newData]);

  const onFocusTextInput = useCallback(() => {
    setIsAddedDisabled(false);
  }, [isAddedDisabled]);

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

  const handleTextInput = useCallback(() => {
    return (val: string) => setTextinput(val);
  }, [dataSource]);

  return {
    dataSource,
    isLoading,
    FlatListItemSeparator,
    renderItem,
    handleTextInput,
    onFocusTextInput,
    textInput,
    isAddedDisabled,
    isRemoveDisabled,
    onCreateItem,
    onRemoveItem,
  };
};

export default useComponent6;

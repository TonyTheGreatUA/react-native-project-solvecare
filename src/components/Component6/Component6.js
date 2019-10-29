//@flow
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './Component6.style';

type Props = {
  dataSource: any,
  onFocusTextInput: () => void,
  handleTextInput: any,
  isAddedDisabled: boolean,
  isRemoveDisabled: boolean,
  onCreateItem: () => void,
  onRemoveItem: () => void,
  textInput: string,
  isLoading: boolean,
  FlatListItemSeparator: any,
  renderItem: any,
};

const Component6 = ({
  isLoading,
  dataSource,
  onFocusTextInput,
  handleTextInput,
  isAddedDisabled,
  isRemoveDisabled,
  onCreateItem,
  onRemoveItem,
  textInput,
  FlatListItemSeparator,
  renderItem,
}: Props) => {
  const itemNumber = dataSource.filter(item => item.isSelect).length;
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add / Remove Cryptocurrencies</Text>
      <FlatList
        data={dataSource}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={item => renderItem(item)}
        keyExtractor={(item, id) => `${id}`}
      />
      <View>
        <TextInput
          onFocus={onFocusTextInput}
          onChangeText={handleTextInput('textInput')}
          clearTextOnFocus={true}
          clearButtonMode="always"
          value={textInput}
          style={styles.inputText}
          placeholder="Input your value here"
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} disabled={isAddedDisabled} onPress={onCreateItem}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} disabled={isRemoveDisabled} onPress={onRemoveItem}>
          <Text>Remove Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component6;

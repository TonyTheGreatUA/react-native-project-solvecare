//@flow
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Switch,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './Component6.style';
import CheckBox from 'react-native-check-box';

type Props = {
  dataSource: any,
  onFocusTextInput: () => void,
  handleTextInput: any,
  isAddedDisabled: boolean,
  isRemoveDisabled: boolean,
  onCreateItem: () => void,
  onRemoveItem: () => void,
  textInput: string,
  loading: boolean,
  FlatListItemSeparator: any,
  renderItem: any,
};

const Component6 = ({
  loading,
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
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
          style={styles.inputText}
          placeholder="Input your value here"
        />
      </View>
      <View style={styles.buttons}>
        <Button disabled={isAddedDisabled} onPress={onCreateItem} title="Add Item" />
        <Button disabled={isRemoveDisabled} onPress={onRemoveItem} title="Remove Item" />
      </View>
    </View>
  );
};

export default Component6;

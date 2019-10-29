//@flow
import React, { Component } from 'react';
import { Text, View, FlatList, Switch, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from './Component6.style';
import CheckBox from 'react-native-check-box';

type Props = {
  data: any,
  isCheckedItem: boolean,
  onCheckBoxClick: () => void,
  onFocusTextInput: () => void,
  handleTextInput: any,
  isAddedDisabled: boolean,
  isRemoveDisabled: boolean,
  onCreateItem: () => void,
  onRemoveItem: () => void,
  textInput: string,
};

const Component6 = ({
  data,
  isCheckedItem,
  onCheckBoxClick,
  onFocusTextInput,
  handleTextInput,
  isAddedDisabled,
  isRemoveDisabled,
  onCreateItem,
  onRemoveItem,
  textInput,
}: Props) => {
  return (
    <View style={styles.view}>
      <FlatList
        data={data}
        keyExtractor={(item, id) => `${id}`}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemRow}>
              <Text style={styles.item}>
                {item.name}
                {item.title}
              </Text>
              <CheckBox onClick={onCheckBoxClick} isChecked={isCheckedItem} />
            </View>
          </View>
        )}
      />
      <View>
        <TextInput
          onFocus={onFocusTextInput}
          clearTextOnFocus={true}
          clearButtonMode="always"
          onChangeText={handleTextInput('textInput')}
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

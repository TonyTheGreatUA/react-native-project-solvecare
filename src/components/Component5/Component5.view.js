import React, { useState, useCallback } from 'react';
import styles from './Component5.style';
import { View, TouchableOpacity, Text, Picker, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
const Component5View = ({ formTitle, buttonTitle, formStyle }: Props) => {
  const [itemData, setItemData] = useState({
    title: '',
    weight: '',
    size: '',
    country: 'UA',
    isCreated: false,
  });
  const { title, weight, size, country, isCreated } = itemData;

  const handleInputText = useCallback(
    (name: string) => {
      return (val: string) => setItemData({ ...itemData, [name]: val });
    },
    [itemData],
  );

  const handlePickerItem = useCallback(
    (item: number | string) => {
      setItemData({ ...itemData, country: item });
    },
    [country],
  );

  const onButtonClick = () => {
    setItemData({ ...itemData, isCreated: true });
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={[formStyle.title, styles.title]}>{formTitle}</Text>
      <View>
        <TextInput
          onChangeText={handleInputText('title')}
          style={[styles.inputText]}
          placeholder="Title"
          value={isCreated ? title : null}
        />
        <TextInput
          onChangeText={handleInputText('weight')}
          style={[styles.inputText]}
          placeholder="Weight"
          value={isCreated ? weight : null}
        />
        <TextInput
          onChangeText={handleInputText('size')}
          style={[styles.inputText]}
          placeholder="Size"
          value={isCreated ? size : null}
        />
        <Picker style={styles.picker} selectedValue={country} onValueChange={handlePickerItem}>
          <Picker.Item lable="UA" value="ua" />
          <Picker.Item lable="CN" value="cn" />
          <Picker.Item lable="US" value="us" />
        </Picker>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onButtonClick} style={formStyle.button}>
          <Text>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component5View;

//@flow
import React, { useState, useCallback, useEffect } from 'react';
import styles from './Component5.style';
import { View, TouchableOpacity, Text, Picker, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

type Props = {
  updateItem: (
    title: string,
    weight: string,
    size: string,
    country: string | number,
    isCreated: boolean,
  ) => void,
  formTitle: string,
  buttonTitle: string,
  formStyle: any,
  itemInfo: any,
  setIsDataUpdated: any,
  isCreated: boolean,
};
const Component5View = ({
  itemInfo,
  formTitle,
  buttonTitle,
  formStyle,
  updateItem,
  setIsDataUpdated,
  isCreated,
}: Props) => {
  const [itemData, setItemData] = useState({
    title: '',
    weight: '',
    size: '',
    country: 'UA',
    isCreated: false,
  });

  useEffect(() => {
    setItemData({ ...itemInfo });
  }, []);

  const handleInputText = useCallback((name: string) => {
    return (val: string) => setItemData({ ...itemData, [name]: val });
  });

  const handlePickerItem = useCallback(
    (item: number | string) => {
      setItemData({ ...itemData, country: item });
    },
    [itemData.country],
  );

  const onButtonClick = () => {
    setItemData({ ...itemData, isCreated: true });
    updateItem(itemData.title, itemData.weight, itemData.size, itemData.country, true);
    setIsDataUpdated(true);
  };
  console.log(itemData);
  return (
    <View style={styles.cardback}>
      <View style={styles.card}>
        <Text style={[formStyle.title, styles.title]}>{formTitle}</Text>
        <View>
          <TextInput
            onChangeText={handleInputText('title')}
            style={[styles.inputText]}
            placeholder="Title"
            value={isCreated ? itemData.title : null}
          />
          <TextInput
            onChangeText={handleInputText('weight')}
            style={[styles.inputText]}
            placeholder="Weight"
            value={isCreated ? itemData.weight : null}
          />
          <TextInput
            onChangeText={handleInputText('size')}
            style={[styles.inputText]}
            placeholder="Size"
            value={isCreated ? itemData.size : null}
          />
          <Picker
            style={styles.picker}
            selectedValue={itemData.country}
            onValueChange={handlePickerItem}
          >
            <Picker.Item label="UA" value="ua" />
            <Picker.Item label="CN" value="cn" />
            <Picker.Item label="US" value="us" />
          </Picker>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onButtonClick} style={formStyle.button}>
            <Text>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component5View;

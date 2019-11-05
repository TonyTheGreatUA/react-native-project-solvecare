//@flow
import React, { useState, useCallback } from 'react';
import styles from './Component5.style';
import { View, TouchableOpacity, Text, Picker, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../../store/itemCardInfo/actions';

type Props = {
  formTitle: string,
  buttonTitle: string,
  formStyle: any,
};
const Component5View = ({ formTitle, buttonTitle, formStyle }: Props) => {
  const [itemData, setItemData] = useState({
    title: '',
    weight: '',
    size: '',
    country: 'UA',
    isCreated: false,
  });

  const dispatch = useDispatch();
  const isItemCreated = useSelector(state => state.itemInfo.isCreated);

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
    [itemData.country],
  );

  const onButtonClick = useCallback(() => {
    dispatch(
      updateItem(
        itemData.title,
        itemData.weight,
        itemData.size,
        itemData.country,
        itemData.isCreated,
      ),
    );
    setItemData({ ...itemData, isCreated: true });
  }, []);

  console.log(itemtest);
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={[formStyle.title, styles.title]}>{formTitle}</Text>
      <View>
        <TextInput
          onChangeText={handleInputText('title')}
          style={[styles.inputText]}
          placeholder="Title"
          value={isItemCreated ? itemData.title : null}
        />
        <TextInput
          onChangeText={handleInputText('weight')}
          style={[styles.inputText]}
          placeholder="Weight"
          value={isItemCreated ? itemData.weight : null}
        />
        <TextInput
          onChangeText={handleInputText('size')}
          style={[styles.inputText]}
          placeholder="Size"
          value={isItemCreated ? itemData.size : null}
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
  );
};

export default Component5View;

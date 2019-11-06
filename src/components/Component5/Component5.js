import styles from './Component5.style';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Button, TextInput, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import WithEditItem from './withEditItem';
import WithCreateItem from './withCreateItem';
import { updateItem } from '../../store/itemCardInfo/actions';

type Props = {};

const Component5 = ({  }: Props) => {
  const createStyle = !isItemCreated ? [styles.buttonIsDisabled, styles.buttons] : styles.buttons;
  const updateStyle =
    isItemCreated || isCreated === false
      ? [styles.buttonIsDisabled, styles.buttons]
      : styles.buttons;

  const [isItemCreated, setIsItemCreated] = useState(false);

  const isCreated = useSelector(state => state.itemInfo.isCreated);
  const itemData = useSelector(state => state.itemInfo);

  return (
    <View>
      <View>
        {isItemCreated ? (
          <WithEditItem itemInfo={itemData} updateItem={updateItem} />
        ) : (
          <WithCreateItem itemInfo={itemData} updateItem={updateItem} />
        )}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          disabled={!isItemCreated}
          style={createStyle || isCreated === true}
          onPress={() => {
            updateItem('', '', '', 'UA', false);
            setIsItemCreated(false);
          }}
        >
          <Text>Create Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isItemCreated || isCreated === false}
          style={updateStyle}
          onPress={() => {
            setIsItemCreated(true);
          }}
        >
          <Text>Edit Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component5;

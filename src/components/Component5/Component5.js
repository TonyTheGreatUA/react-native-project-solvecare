import styles from './Component5.style';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Button, TextInput, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import WithEditItem from './withEditItem';
import WithCreateItem from './withCreateItem';

type Props = {};
const Component5 = ({  }: Props) => {
  const [isItemCreated, setIsItemCreated] = useState(false);
  const isCreated = useSelector(state => state.itemInfo.isCreated);
  const itemData = useSelector(state => state.itemInfo);

  return (
    <View>
      <View>
        {isItemCreated ? (
          <WithEditItem itemData={itemData} />
        ) : (
          <WithCreateItem itemData={itemData} />
        )}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={!isItemCreated ? [styles.buttonIsDisabled, styles.buttons] : styles.buttons}
          disabled={isItemCreated}
          onPress={() => {
            setIsItemCreated(false);
          }}
        >
          <Text> Create Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isItemCreated ? [styles.buttonIsDisabled, styles.buttons] : styles.buttons}
          disabled={!isItemCreated}
          onPress={() => {
            setIsItemCreated(true);
          }}
        >
          <Text> Edit Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component5;

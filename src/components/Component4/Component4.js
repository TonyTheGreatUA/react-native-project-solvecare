//@flow
import styles from './Component4.style';
import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import useComponent4 from './useComponent4';

const Component4 = () => {
  const { user, defaultLoadAmount } = useComponent4();
  return (
    <View style={styles.view}>
      <FlatList
        data={user}
        initialNumToRender={defaultLoadAmount}
        keyExtractor={(item, email: any) => email}
        windowSize={20}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View style={styles.itemRow}>
              <Image style={styles.avatar} source={{ uri: item.picture.thumbnail }} />
              <Text style={styles.index}>{index++}</Text>
              <Text style={styles.firstName}>{item.name.first}</Text>
              <Text style={styles.lastName}>{item.name.last}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Component4;

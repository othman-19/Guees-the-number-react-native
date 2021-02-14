import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 6,
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.6,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    backgroundColor: 'white',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default Card;

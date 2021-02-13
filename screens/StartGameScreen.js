import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const StartGameScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.headerTitle}>
      Start a New Game!
    </Text>
    <View>
      <Text>Select a Number</Text>
      <TextInput />
      <View>
        <Button title="Reset" />
        <Button title="Confirm" />
      </View>
    </View>

  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default StartGameScreen;

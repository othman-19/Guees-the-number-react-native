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
    <Text style={styles.title}>
      Start a New Game!
    </Text>
    <View style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <TextInput />
      <View style={styles.buttonContainer}>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
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
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;

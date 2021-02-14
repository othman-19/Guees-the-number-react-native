import React, { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = () => {
  const [entredValue, setEntredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numbeInputHandler = inputText => {
    setEntredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEntredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(entredValue, 10);
    if (Number.isNaN(chosenNumber)
      || chosenNumber <= 0
      || chosenNumber > 99
    ) {
      Alert.alert(
        'Please choose another number!',
        'Your number should be a number between 1 and 99',
        [
          {
            text: 'Okey',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEntredValue('');
  };

  // let confirmedOutput;
  // if (confirmed) {
  //   confirmedOutput = (
  //     <Text>
  //       Chosen Number:
  //       {selectedNumber}
  //     </Text>
  //   );
  // }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.screen}>
        <Text style={styles.title}>
          Start a New Game!
        </Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numbeInputHandler}
            value={entredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmed && (
        <Text>
          Chosen Number:
          {selectedNumber}
        </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

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
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: '40%',
  },
  input: {
    width: '25%',
    textAlign: 'center',
    fontSize: 25,
    padding: 1.5,
  },
});

export default StartGameScreen;

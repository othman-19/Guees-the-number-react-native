import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setuserNumber(selectedNumber);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {!userNumber && (<StartGameScreen startGameHandler={startGameHandler} />)}
      {userNumber && (<GameScreen userChoice={userNumber} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

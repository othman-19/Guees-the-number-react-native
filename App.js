import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const setNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const GameOverHandler = rounds => {
    setGuessRounds(rounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />

      {!userNumber && (<StartGameScreen startGameHandler={startGameHandler} />)}

      {userNumber
      && guessRounds <= 0
      && (<GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />)}

      {guessRounds > 0
      && (
        <GameOverScreen
          rounds={guessRounds}
          userNumber={userNumber}
          setNewGameHandler={setNewGameHandler}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

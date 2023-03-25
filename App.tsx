/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const App = () => {
  const [message, setMessage] = useState();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Say Hello"
        onPress={() => {
          setTimeout(() => {
            setMessage("Hello world!");
          }, 1000);
        }}
      />
      {message && (
        <Text testID="printed-message">
          {message}
        </Text>
      )}
    </View>
  )
}

export default App;
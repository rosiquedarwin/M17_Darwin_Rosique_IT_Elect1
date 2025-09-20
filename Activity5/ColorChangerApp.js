import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white'); // default background color

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="White" onPress={() => setBgColor('white')} />
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
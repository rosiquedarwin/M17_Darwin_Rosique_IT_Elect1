import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white'); // default background color

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="White" onPress={() => setBgColor('white')} />
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
=======
import { View, Button,Text, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState("white"); // default background color

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
          <Text style={styles.title}>Color Changer App</Text>
      <Button title="White" onPress={() => setBgColor('white')} />
      <View style={{ height: 10 }} />  
      <Button title="Pink" onPress={() => setBgColor('pink')} />
      <View style={{ height: 10 }} /> 
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
>>>>>>> b053f51 (Color Changer App)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: 'center',
    padding: 20,
  },
});
=======
    justifyContent: 'center',  // vertical center
    alignItems: 'center',      // horizontal center
    padding: 20,
  },
  title: { fontSize: 24, marginBottom: 20 },
});






>>>>>>> b053f51 (Color Changer App)
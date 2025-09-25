
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Comment from './Comment';
import Chat screen from './ChatScreen';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Comment/>
        <ChatScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

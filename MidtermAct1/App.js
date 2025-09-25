<<<<<<< HEAD
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <CounterApp />
        <ColorChangerApp />
      </ScrollView>
    </SafeAreaView>
  );
}


=======
import Comment from './Comment';
import ChatScreen from './ChatScreen';
import React from "react";


export default function App() {
  return ( <>
<ChatScreen />
<Comment />

</>
)
}






>>>>>>> b053f51 (Color Changer App)
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styleText.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c4675',
    color:'red',
    alignItems: 'center',
    marginTop: '20%',
    justifyContent: 'top',
  },
});

const styleText = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
  },
});

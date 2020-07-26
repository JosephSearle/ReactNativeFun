import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Joseph');
  const [person, setPerson] = useState({ name: 'Max', age: 22 });

  const clickHandler = () => {
    setName('Dick Head');
    setPerson({name: 'Tyler', age: 60});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopping list</Text>
        <Text style={styles.text}>A React Native app by Joseph Searle</Text>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title='Update State' onPress={clickHandler}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#333',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },  
  
  text: {
    color: '#fff'
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 20, 
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
  }
});

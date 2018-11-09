import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListaLembretes from './ListaLembretes';

export default class App extends React.Component {

  state = {
    lembretes: []
  }

  componentDidMount(){
    fetch('https://devreminder.herokuapp.com/lembrete', {method: 'GET'})
    .then(T => T.json())
    .then(lembretes => this.setState(lembretes))
  }

  render() {

      <ListaLembretes/>
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


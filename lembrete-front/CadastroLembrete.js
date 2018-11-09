import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import FormLembrete from './FormLembrete';
import qs from 'querystring'

export default class CadastroLembrete extends React.Component {

  onSave (data) {
    fetch('https://devreminder.herokuapp.com/lembrete', {
      method: 'POST',
      body: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(T => T.json())
      .then(() => this.props.history.push('/'))
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Cadastro Lembrete</Text>
        <FormLembrete onSave={this.onSave.bind(this)}/>
      </View>
    );
  }

}


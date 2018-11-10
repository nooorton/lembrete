import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FormLembrete from '../components/FormLembrete'
import qs from 'querystring'
 
export default class CadastroLembrete extends Component {
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
 
  render () {
    return (
      <View style={styles.container}>
        <Text>CadastroLembrete</Text>
        <FormLembrete
          onSave={this.onSave.bind(this)}
          onCancel={() => this.props.history.push('/')}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import FormLembrete from '../components/FormLembrete'
import qs from 'querystring'
 
export default class EditarLembrete extends Component {
  state = {
    lembrete: undefined
  }
 
  onSave (data) {
    const pageId = this.props.match.params.pageId
 
    const options = {
      method: 'PUT',
      body: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
 
    fetch(`https://devreminder.herokuapp.com/lembrete/${pageId}`, options)
      .then(T => T.json())
      .then(() => Alert.alert('editar', 'lembrete editado'))
      // .then(() => this.props.history.push('/'))
  }
 
  componentDidMount () {
    const pageId = this.props.match.params.pageId
 
    fetch(`https://devreminder.herokuapp.com/lembrete/${pageId}`, { method: 'GET' })
      .then(T => T.json())
      .then(lembrete => this.setState({ lembrete }))
  }
 
  render () {
    const { lembrete } = this.state
 
    return (
      <View style={styles.container}>
        <Text>Editar Lembrete</Text>
        {!lembrete && (
          <Text>Não ha nenhum lembrete</Text>
        )}
        {lembrete && (
          <FormLembrete
            value={lembrete}
            onSave={this.onSave.bind(this)}
            onCancel={() => this.props.history.push('/')}
          />
        )}
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
import React from 'react'
import { Text, View, Button, Alert, StyleSheet } from 'react-native'
 
export default class ListaLembretes extends React.Component {
  state = {
    lembretes: []
  }
 
  componentDidMount () {
    fetch('https://devreminder.herokuapp.com/lembrete', { method: 'GET' })
      .then(T => T.json())
      .then(lembretes => this.setState({ lembretes }))
  }
 
  onDelete (id) {
    Alert.alert(
      'Exclusão de lembrete',
      'Você confirma a exclusão deste lembrete?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => {
            fetch(`https://devreminder.herokuapp.com/lembrete/${id}`, { method: 'DELETE' })
              .then(T => T.json())
              .then(() => this.setState({ lembretes: this.state.lembretes.filter(T => T.id !== id) }))
          }
        }
      ])
  }
 
  render () {
    const { lembretes } = this.state
 
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text>Lembrete</Text>
          <Button title='Adicionar' onPress={() => this.props.history.push('/cadastro')} />
        </View>
        <View style={{ flex: 0.9 }}>
          {lembretes.map((lembrete, key) => (
            <View key={key} style={{ flex: 0.1, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ flex: 0.6 }}>{lembrete.conteudo}</Text>
              <Button style={{ flex: 0.2 }} title='Editar' onPress={() => this.props.history.push('/' + lembrete.id)} />
              <Button style={{ flex: 0.2 }} title='Excluir' onPress={() => this.onDelete(lembrete.id)} />
            </View>
          ))}
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingLeft: 20,
    paddingRight: 20
  },
  subcontainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
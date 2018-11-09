import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ListaLembretes extends React.Component {

  state = {
    lembretes: []
  }

  componentDidMount(){
    fetch('https://devreminder.herokuapp.com/lembrete', {method: 'GET'})
    .then(T => T.json())
    .then(lembretes => this.setState(lembretes))
  }

  render() {

    const { lembretes } = this.state;

    return (
      <View style={styles.container}>
      <Text>Lembrete</Text>
      <Button title="Adicionar" onPress={()=> console.log('criou lembrete')}/>
       <View>
          
          {lembretes.map((lembrete,key) => (
            <View key={key}>
              <Text>{lembrete.conteudo}</Text>
              <Button title="Editar" onPress={()=> console.log('Editar lembrete')}/>
              <Button title="Excluir" onPress={()=> console.log('Excluir lembrete')}/>
            </View> 
          ))}
         
        </View>
      </View>
    );
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


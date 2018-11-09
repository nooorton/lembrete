import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Lembrete</Text>
      <Button title="Adicionar" onPress={()=> console.log('criou lembrete')}/>
       <View>
          <View>
            <Text>Teste</Text>
            <Button title="Editar" onPress={()=> console.log('Editar lembrete')}/>
            <Button title="Excluir" onPress={()=> console.log('Excluir lembrete')}/>
          </View>
          <View>
            <Text>Teste 2</Text>
            <Button title="Editar" onPress={()=> console.log('Editar lembrete')}/>
            <Button title="Excluir" onPress={()=> console.log('Excluir lembrete')}/>
          </View>
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


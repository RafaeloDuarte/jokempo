import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Topo from './components/topo.js'
import Icone from './components/icone.js'

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = { escolhaDoUsuario : '',
     escolhaDoComputador:'',
     resultado:'',
    }
  }

  jokempo(escolhaUsuario){
    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';
    var resultado = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    if(escolhaUsuario == escolhaComputador){
      resultado = 'Empate'
    }else{
      if(escolhaUsuario == 'pedra' && escolhaComputador == 'papel'){
        resultado = 'computador ganhou'
      }else {
        resultado = 'você ganhou'
      }
      if(escolhaUsuario == 'papel' && escolhaComputador == 'tesoura'){
        resultado = 'computador ganhou'
      }else {
        resultado = 'você ganhou'
      }
      if(escolhaUsuario == 'tesoura' && escolhaComputador == 'papel'){
        resultado = 'você ganhou'
      }else {
        resultado = 'computador ganhou'
      }
    }


    this.setState({ escolhaDoUsuario : escolhaUsuario,
        escolhaDoComputador: escolhaComputador,
        resultado:resultado
      });
  }

  render() {
     return (
      <View style={styles.container}>
        <View>
          <Topo/>
        </View>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={()=>{this.jokempo('pedra')}}/>
          </View>
          <View>
            <Button title='papel'onPress={()=>{this.jokempo('papel')}}/>
          </View>
          <View>
            <Button title='tesoura'onPress={()=>{this.jokempo('tesoura')}}/>
          </View>
        </View>
        <View>
          <View style={styles.palco}>
            <Icone escolha={this.state.escolhaDoUsuario} jogador='Você'/>
            <Icone escolha={this.state.escolhaDoComputador} jogador='Computador'/>
            <Text style={styles.txtResultado}>{this.state.resultado}</Text>
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
  btnEscolha:{
    width:90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 10
  },
  palco:{
    alignItems:'center',
    marginTop:10
  },
  txtResultado:{
    fontSize:25,
    fontWeight: 'bold',
    color: 'red',
    heigth: 60
  }
}
);
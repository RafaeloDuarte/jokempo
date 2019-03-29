import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

class Icone extends React.Component{

    render(){
      if(this.props.escolha=='tesoura'){
        return(
          <View>
            <Text>{this.props.jogador}</Text>
            <Image source={require('../images/tesoura.png')}/>
          </View>
        );
      } else if (this.props.escolha=='pedra'){
        return(
          <View>
            <Text>{this.props.jogador}</Text>
            <Image source={require('../images/pedra.png')}/>
          </View>
        );
      } else if (this.props.escolha=='papel'){
        return(
          <View>
            <Text>{this.props.jogador}</Text>
            <Image source={require('../images/papel.png')}/>
          </View>
        );
      } else {
        return false;
      }
    }
  }

export default Icone
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from './config'


export default class MusicLinks extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
     
    }
  this.requestRef= null
  }

  
   
  copyCodeToClipboard = () => {
      const el = this.textArea
      el.select()
      document.execCommand("copy")
  }  

 
  render(){
    return(
     <View>
       <Text style={styles.musiclinks}>      
         Music Links
       </Text>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value=""
          />
          <TouchableOpacity
           onPress={() => this.copyCodeToClipboard()}>
            Copy to Clipboard

          </TouchableOpacity>
       </View>
     </View>
     
    )
  }
}

const styles = StyleSheet.create({
  musiclinks:{
    width:50,
    length:80,
    color:"lime",

  },
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})

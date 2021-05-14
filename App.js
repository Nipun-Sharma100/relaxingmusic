import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import {Text, View} from 'react-native'
import WelcomeScreen from './WelcomeScreen';
import MusicLinks from './MusicLinks';

export default class App extends React.Component{
  render(){
  return (
    <View>
   <AppContainer/>
    <Text> just testing </Text>
    </View>
  );
}
}
var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  MusicLinks:MusicLinks
})

const AppContainer = createAppContainer(AppNavigator)
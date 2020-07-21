/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MenuUtama from './Component/MenuUtama';
import MenuGame from './Component/MenuGame';
import MenuHits from './Component/MenuHits';
import MenuBerita from './Component/MenuBerita';

const Header = () => {
  return(
    <View>
      <Text>Halaman Header</Text>
    </View>
  )
}
const Footer = () => {
  var niomic = "@Niomic";
  return(
    <View>
      <Text>footer {niomic} </Text>
    </View>
  )
}

class App extends Component{
  render(){
    return(
      <View>
        <Header/>
        <MenuUtama/>
        <MenuGame/>
        <MenuBerita/>
        <MenuHits/>
        <Footer/>
      </View>
    )
  }
}


export default App;

import React,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <AppHeader/>
      <View style={styles.button}>
      <Button title="ABOUT US"
              color="#FF2800">
      </Button>
      </View>
      <View style={styles.button}>
      <Button title="LESSON VIDEOS"
              color="#4CBB17">
      </Button>
      </View>
      <View style={styles.button}>
      <Button title=" OUR COURSES"
              color="#EC5578">
      </Button>
      </View>
      <View style={styles.button}>
      <Button title="OUR MISSION"
              color="#613613">
      </Button>
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    marginTop:40,
  },
  button:{
    marginTop:20,
    height:60,
    borderRadius:5,
    borderWidth:5,
  },
})
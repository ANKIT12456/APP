import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './Screens/HomeScreen';
import NotesScreen from './Screens/NotesScreen';
import SolutionScreen from './Screens/SolutionScreen';
import ImpScreen from './Screens/ImpScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Home:{screen:HomeScreen},
  Notes:{screen:NotesScreen},
  Imp:{screen:ImpScreen},
  Solution:{screen:SolutionScreen},
},
  {
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
      if(routeName==="Home"){
        return(
          <Image 
               source={require("./Images/home.jpg")}
               style={{width:35 , height:35}}/>
        )
      }
      else if(routeName==="Notes"){
        return(
          <Image 
               source={require("./Images/notes.png")}
               style={{width:35 , height:35}}/>
        )
      }
      else if(routeName==="Solution"){
        return(
          <Image 
               source={require("./Images/solutions.png")}
               style={{width:35 , height:35}}/>
        )
      }
      else if(routeName==="Imp"){
        return(
          <Image 
               source={require("./Images/imp.png")}
               style={{width:40 , height:40}}/>
        )
      }
    }
  })
})

const AppContainer=createAppContainer(TabNavigator);

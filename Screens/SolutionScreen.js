import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Button,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class SolutionScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <AppHeader/>
      <View style={styles.img}>
      <Image 
               source={require("../Images/history.png")}
               style={{width:60 , height:60}}/>
      <Text>             </Text>
      <Image 
               source={require("../Images/civics.png")}
               style={{width:60 , height:60}}/>
      <Text>           </Text>
      <Image 
               source={require("../Images/geo.png")}
               style={{width:60 , height:60}}/>
      </View>
      <View style={styles.button}>
      <TouchableOpacity style={[styles.civics,{backgroundColor:'#FD6A02'}]}>
      <Text>HISTORY</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={[styles.geo,{backgroundColor:'#FCE205'}]}>
      <Text>CIVICS</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={[styles.geo,{backgroundColor:'#4CBB17'}]}>
      <Text>GEOGRAPHY</Text>
      </TouchableOpacity> 
      </View>
      <View style={styles.img}>
      <Image 
               source={require("../Images/bio.png")}
               style={{width:60 , height:60}}/>
      <Text>               </Text>
      <Image 
               source={require("../Images/chem.png")}
               style={{width:60 , height:60}}/>
      <Text>               </Text>
      <Image 
               source={require("../Images/phy.png")}
               style={{width:60 , height:60}}/>
      </View>
      <View style={styles.button}>
      <TouchableOpacity style={[styles.civics,{backgroundColor:'#008ECC'}]}>
      <Text>BIOLOGY</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={[styles.geo,{backgroundColor:'#F81894'}]}>
      <Text>CHEMISTRY</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={[styles.geo,{backgroundColor:'#795C32'}]}>
      <Text>PHYSICS</Text>
      </TouchableOpacity> 
      </View>
      <View style={styles.img}>
      <Image 
               source={require("../Images/poems.png")}
               style={{width:60 , height:60}}/>
      <Text>               </Text>
      <Image 
               source={require("../Images/stories.png")}
               style={{width:60 , height:60}}/>
      <Text>               </Text>
      <Image 
               source={require("../Images/math.png")}
               style={{width:60 , height:60}}/>
      </View>
      <View style={styles.button}>
      <TouchableOpacity style={[styles.civics,{backgroundColor:'#FF2800'}]}>
      <Text>POEMS</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={[styles.geo,{backgroundColor:'#C7EA46'}]}>
      <Text>STORIES</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={[styles.geo,{backgroundColor:'#CD5C5C'}]}>
      <Text>MATHS</Text>
      </TouchableOpacity> 
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    marginTop:40,
  },
  text1:{
    fontWeight:10,
    fontFamily:'Forte',
  },
  img:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:20,
  },
  history:{
    borderRadius:5,
    borderColor:'black',
    borderWidth:7,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:40,
  },
  civics:{
    borderRadius:5,
    borderColor:'black',
    borderWidth:7,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:40,
    marginLeft:30,
  },
  geo:{
    borderRadius:5,
    borderColor:'black',
    borderWidth:7,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:100,
    height:40,
    marginLeft:5,
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10,
    marginTop:30,
    width:80,
    height:20,
  },
})
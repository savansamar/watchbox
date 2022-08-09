import { Image, StyleSheet, Text, TouchableOpacity, View,Platform, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TabScreen } from './index'
import { Colors } from '../../constant/colors'
const {height:GLOBAL_HEIGHT,width:GLOBAL_WIDTH}=Dimensions.get('screen')


interface Props {
  state:any,
  descriptors:any,
  navigation:any
}

interface TabProps{
  key?:any,
  name?:any,
  image?:any,
  callBack?:()=>void
}

const Tab=(Props:TabProps)=>{
  return(
    <TouchableOpacity style={styles.tab} onPress={Props.callBack} >
      <Image source={Props.image} style={styles.image} />
    </TouchableOpacity>
  )
}


const CustomTab = (Props:Props) => {
  const { state, descriptors } = Props;
const focusedOptions = descriptors[state.routes[state.index].key].options;
console.log("Ff",focusedOptions)

const navigation=useNavigation<NativeStackNavigationProp<TabScreen>>()
  const [currentTab,setCurrentTab]=React.useState<number>()

  const onPress=(name:any)=>{
   navigation.navigate(name)
  }
  if (focusedOptions.tabBarStyle.display==='none') { return null; }
  else 
  {

  return (
    <View style={styles.row}>
      {
        Props.state?.routes.map((route:any,index:any)=>{


          const { options } = Props.descriptors[route.key];
          if (options.tabBarVisible === false) { 
           }
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = Props.state.index === index;
          return(
            <Tab 
              key={index} 
              image={!isFocused?route.params.active:route.params.deActive}
              callBack={()=>onPress(route?.name)}
            />
          )
        })
      }
    </View>
  )}
}

export default CustomTab

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    height:Platform.OS==='ios'?GLOBAL_HEIGHT*0.085:GLOBAL_HEIGHT*0.07,
    width:"100%",
    backgroundColor:Colors.white,
    alignItems:"center",
    paddingBottom:Platform.OS==='ios'?7:0,
    

    shadowColor: Colors.grey,
    shadowOffset: {width: 0, height: 45},
    shadowOpacity: 0.9,
    shadowRadius: 35,
    elevation:6
  },
  tab:{
    flex:1,
    margin:5,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:0
  },
  image:{
    height:GLOBAL_HEIGHT*0.03,
    width:GLOBAL_HEIGHT*0.03,
    resizeMode:"contain"
  }
})
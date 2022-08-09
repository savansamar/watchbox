import { StyleSheet, Text, View,FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import Empty from '../../../component/Item/Empty'
import { Colors } from '../../../constant/colors'
import { useNavigation } from '@react-navigation/native'
import {WatchDetails} from '../../../component/Item/Watch'
import MyWatchBoxItem from '../../../component/Item/MyWatchBoxItem'
import PopUP from '../../../component/Modal/PopUp'
import PopUp from '../../../component/Modal/PopUp'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import Press from '../../../component/Button/Press'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'




interface MyWatchBoxProps{
  watch:WatchDetails[]
}

const MyWatchBox = (Props:MyWatchBoxProps) => {
  const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
  const nav=useNavigation()
  const [watch,setWatch]=React.useState<WatchDetails[]>([])
  const [showModal,setShowModal]=React.useState<boolean>(false)

  const onFill=()=>{
    setWatch(Props.watch)
  }

const _renderItem:ListRenderItem<WatchDetails>=React.useCallback(({index,item})=>{
  const onPress=(e:string|WatchDetails)=>{
    if(e==='option'){
      setShowModal(true)
    }
    else if(e==='sell'){
      navigation.navigate('AddWatch')
    }
  }
  return(
    <MyWatchBoxItem item={item} callBack={onPress} />
  )
},[])

const  _listEmptyComponent=React.useCallback(()=>{
  return(
    <Empty title='No watches yet' onPress={onFill} />
  )
},[])


const closeModal=React.useCallback(()=>{
  nav.setOptions({tabBarStyle:{display:"flex"}})
setShowModal(false)
},[])

  return (
    <>
    <View style={styles.container}>
      <FlatList 
        data={watch}
        renderItem={_renderItem}
        keyExtractor={(_,index)=>index.toString()}
        ListEmptyComponent={_listEmptyComponent}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        />
    </View>
      {
        showModal &&
        <View style={styles.modal}>
            <PopUp show={showModal} onClose={closeModal} height={160} max={160} >
              <View style={styles.popUp}>
                  <Press 
                    name='DELETE' 
                    containerStyle={styles.containerStyle} 
                    textStyle={styles.buttonTextColor}
                    onPress={closeModal}
                  />
                  <Press 
                    name='CANCEL'
                    containerStyle={styles.containerCancelStyle} 
                    textStyle={styles.buttonTextColor}
                    onPress={closeModal}
                  />
              </View>
            </PopUp>
        </View>
      }
    </>
  )
}

export default MyWatchBox

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  contentContainerStyle:{
    paddingHorizontal:16,
    paddingVertical:16
  },
  modal:{
    position:"absolute",
    height:"100%",
    width:"100%",
    zIndex:9999
  },
  popUp:{
    paddingHorizontal:PADDING_HORIZONTAL,
    paddingVertical:19
  },
  containerStyle:{
    borderWidth:1,
    borderColor:Colors.darkBlack,
    backgroundColor:Colors.white
  },
  buttonTextColor:{
    color:Colors.darkBlack
  },
  containerCancelStyle:{
    borderWidth:1,
    borderColor:Colors.white,
    backgroundColor:Colors.white
  }
})
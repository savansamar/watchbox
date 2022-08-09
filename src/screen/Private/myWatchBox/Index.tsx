import { ScrollViewProps, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { globalStyles } from '../../../styles/styles'
import TopTab from '../../../component/FlatList/TopTab'
import { TopTabData } from '../../../constant/static_data'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import WishList from './WishList'
import MyWatchBox from './MyWatchBox'
import GrailWatch from './GrailWatch'
import { useNavigation } from '@react-navigation/native'
import { WatchDetails } from '../../../component/Item/Watch'
import { MyWatchBoxItemList } from '../../../constant/intrefaces/watch'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import Notification from '../../Public/Notification'

interface IndexProp{
    hideTab:(e:boolean)=>void
}

const Index = () => {


    //state
    const [selected_category,setSelectedCategory]=React.useState<string>('My WatchBox')
    const [MyWatchBoxItem,setMyWatchBoxItem]=React.useState<WatchDetails[]>(MyWatchBoxItemList)
    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [showNotification,setShowNotification]=React.useState<boolean>(false)

    //
    const onSelect=React.useCallback((e:string)=>{
        setSelectedCategory(e)
    },[])



    
    const headerPropRef:HeaderProps={
        leftIcon:Images.logoSymbol,
        leftImageStyle:[globalStyles.logoStyle,{tintColor:Colors.white,right:12}],
        rightIcon:Images.addIcon,
        onPressRight(){
            navigation.navigate('CreateWatch')
        },
        onPressLeft(){
            setShowNotification(true)
        }
    }

    
  return (
    <View style={styles.container}>
        <Notification show={showNotification} onClose={()=>setShowNotification(false)} />
        <Header {...headerPropRef} />
        <TopTab data={TopTabData} onPress={onSelect} />
            {selected_category=== 'Wishlist' && <WishList /> }
            {selected_category==='My WatchBox' && <MyWatchBox watch={MyWatchBoxItem} />}
            {selected_category==='Grail Watch' && <GrailWatch />}

    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    scroll:{
        flex:1,
    },
    emptyView:{
        paddingHorizontal:PADDING_HORIZONTAL,
        marginTop:70,
        marginBottom:65,
        alignItems:"center"
    },
    title:{
        fontSize:24,
        lineHeight:28,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        letterSpacing:-1,
        marginBottom:20
    },
    description:{
        fontSize:12,
        lineHeight:18.3,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        textAlign:"center",
        width:"85%",
        marginBottom:24,
        letterSpacing:0.7
    },
    containerStyle:{
        width:146,
        borderWidth:1,
        borderColor:Colors.darkBlack,
        justifyContent:"center",
        alignItems:"center",
        height:32
    },
    textStyle:{
        fontSize:10,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,letterSpacing:0.2
    },
    bottomView:{
        width:"100%",
        paddingHorizontal:PADDING_HORIZONTAL,
        alignItems:"center"
    },
    row:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginBottom:32,
    },
    bottomImage:{
        height:32,
        width:32,
        tintColor:Colors.fadedGrey,
        marginRight:24
    },
    bottomText:{
        fontSize:12,
        letterSpacing:0.4,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        width:"65%"
    }
})
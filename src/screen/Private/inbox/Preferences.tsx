import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fonts } from '../../../constant/fonts'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import InputBox from '../../../component/textInput/InputBox'
import { Images } from '../../../constant/images'
import { EnthusiasItem } from '../../Public/preference/EnthusiastLevel'
import PressImage from '../../../component/Button/PressImage'
import Watches from '../../../component/Item/Watches'

const _render=()=>{
    return(
        <Watches type='Horizontal' />
    )
}


interface PreferencesProp{
    active?:boolean
}

function Preferences(Props:PreferencesProp){

    const [name,setName]=React.useState<string>('elonmusk')
    console.log("Pre _++",Props.active)
if(true){

    const _onChange=(e:string)=>{
        setName(e)
    }

  return (
    <View style={styles.container}>
        <InputBox 
            onChangeText={_onChange}
            rightImage={Images.editIcon}
            value={`@${name}`}
            inputStyle={{paddingLeft:0}}
            title="Username"
            bottomSpace={28}    
        />

            <View style={[styles.row,{marginBottom:16}]}>
                <Text style={[styles.title]}>Enthusiast Level</Text>
                <PressImage image={Images.editIcon} />
            </View>
            <EnthusiasItem 
                image={Images.noviceIcon}
                title='Novice'
                onPress={()=>{}}
            />
            <View style={[styles.border,{marginVertical:24}]} />


            <View style={[styles.row,{marginBottom:32}]}>
                <Text style={[styles.title]}>Favorite brands</Text>
                <PressImage image={Images.editIcon} />
            </View>
            <Text style={styles.boldTitle}>Rolex</Text>
            <View>
            <FlatList 
                contentContainerStyle={{flexGrow:1,marginTop:24}}
                data={Array(20000).fill(20)}
                renderItem={_render}
                keyExtractor={(_,index)=>index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>

            <Text style={[styles.boldTitle,{marginTop:32}]}>Omega</Text>
            <View>
            <FlatList 
                contentContainerStyle={{flexGrow:1,marginTop:24}}
                data={Array(20000).fill(20)}
                renderItem={_render}
                keyExtractor={(_,index)=>index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>

            <TouchableOpacity activeOpacity={0.5} style={styles.pick}>
                <Text style={[styles.title,{fontFamily:Fonts.medium}]}>+ PICK MODELS</Text>
            </TouchableOpacity>
    </View>
  )}
  else {
    return null
  }
}

export default React.memo(Preferences)

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:PADDING_HORIZONTAL,paddingVertical:28
    },
pick:{
    height:32,
    paddingHorizontal:16,
    borderWidth:1,
    borderColor:Colors.darkBlack,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginVertical:40
},

    title:{
        fontSize:10,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack    
    },
    boldTitle:{
        fontSize:14,
        lineHeight:20,
        color:Colors.darkBlack,
        fontFamily:Fonts.semiBold   
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    border:{
        borderBottomWidth:0.4,
        borderBottomColor:Colors.grey,
        width:"100%"
    }
})
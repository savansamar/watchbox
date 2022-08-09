import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import InputBox from '../../../component/textInput/InputBox'

const Shipping = () => {


    const _filed=(e:boolean)=>{
        return(
            <>
            <View style={styles.row}>
                <InputBox 
                    title='First Name' 
                    onChangeText={()=>{}}
                    containerStyle={{flex:1}}
                    placeholder='John'
                />
                <View style={{marginHorizontal:10}} />
                <InputBox 
                    title='Last Name' 
                    onChangeText={()=>{}}
                    containerStyle={{flex:1}}
                    placeholder='Smith'
                />
            </View>

            <InputBox 
                onChangeText={()=>{}}
                title='Address'
                bottomSpace={28}
            />
             <InputBox 
                onChangeText={()=>{}}
                title='Address 2(optional) '
                bottomSpace={28}
            />
            <InputBox 
                onChangeText={()=>{}}
                title='Address 2(optional) '
                bottomSpace={28}
            />
            <InputBox 
                onChangeText={()=>{}}
                title='Country'
                bottomSpace={28}
            />
            <View style={styles.row}>
                <InputBox 
                    title='Zip Code' 
                    onChangeText={()=>{}}
                    containerStyle={{flex:1}}
                />
                <View style={{marginHorizontal:10}} />
                <InputBox 
                    title='City' 
                    onChangeText={()=>{}}
                    containerStyle={{flex:1}}
                />
            </View>
            <InputBox 
                onChangeText={()=>{}}
                title='State/Province'
                bottomSpace={28}
            />
            {
                e && <View style={styles.row}>
                <View style={styles.check} />
                <Text style={styles.rowText}>Billing address is the same as shipping</Text> 
            </View>
            }
            </>
        )
    }

  return (
        <View style={styles.section}>
                {_filed(true)}
            <Text style={styles.title}>Enter your billing address</Text>
            {_filed(false)}
        </View>
  )
}

export default Shipping

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    section:{
        flex:1,
    },
    title:{
        fontSize:14,
        lineHeight:16,
        fontFamily:Fonts.semiBold,
        marginTop:38,
        marginBottom:25
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        justifyContent:"space-between",
        marginBottom:28
      //  justifyContent:"center"
    },
    check:{
        backgroundColor:"#d7dedf",
        height:20,
        width:20
    },
    rowText:{
        flex:1,
        marginLeft:15,
        fontSize:10,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack
    }
})


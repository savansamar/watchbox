import { StyleSheet, Text, View,Modal } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/colors'
import PressImage from '../../component/Button/PressImage'
import { Images } from '../../constant/images'
import { Fonts } from '../../constant/fonts'
import Press from '../../component/Button/Press'
import { PADDING_HORIZONTAL } from '../../constant/style'

interface NotificationProp{
    show?:boolean,
    onClose?:()=>void
}


const Notification = (Props:NotificationProp) => {
  return (
    <Modal
        onRequestClose={Props.onClose}
        visible={Props.show}
        animationType='slide'
        transparent={true}
    >
    <View style={styles.container}>
        <View style={styles.section}>
            <PressImage disable={true} image={Images.groupImage} style={styles.image} />
            <Text style={styles.title} >Want to be first to know?</Text>
            <Text style={styles.desc}>Maecenas a dui eget ante viverra venenatis. In hac habse platea dictumst.</Text>

                <View style={styles.bottom}>
                    <Press name='ALLOW' spaceVertical={10} />
                    <Press name='SKIP FOR NOW' containerStyle={styles.button} color={Colors.darkBlack} onPress={Props.onClose} />
                </View>

        </View>
    </View>
    </Modal>
  )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:'rgba(rgba(29, 27, 28, 0.4))',
        justifyContent:"center",
        alignItems:"center"
    },
    section:{
        paddingBottom:32,
        backgroundColor:Colors.white,
        width:327,
        alignSelf:"center",
    },
    image:{
        height:237,
        width:"100%",
        resizeMode:"contain"
    },
    title:{
        fontSize:24,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        letterSpacing:-0.7,
        textAlign:"center",
        marginVertical:27
    },
    desc:{
        fontSize:12,
        lineHeight:16,
        fontFamily:Fonts.regular,
        letterSpacing:-0.3,
        textAlign:"center",
        width:272,
        textAlignVertical:"center",
        alignSelf:"center",
        marginBottom:40
    },
    bottom:{
        paddingHorizontal:PADDING_HORIZONTAL
    },
    button:{
        borderWidth:1,
        borderColor:Colors.darkBlack,
        backgroundColor:Colors.white
    }
})
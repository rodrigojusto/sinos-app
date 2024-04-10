import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={StyleSheet.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/Logo-Light.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Sinos Telecom</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={ ()=> navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
    },
    containerForm:{
        flex:1,
        backgroundColor: '#48b6ad',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom:12,
        alignSelf:'center',
    },
    text:{
        color: '#666',
        alignSelf:'center',
    },
    button:{
        position:'absolute',
        backgroundColor: '#08665d',
        borderRadius: 50,
        paddingVertical:8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        color:"#fff",
        fontWeight: 'bold',
    }

})
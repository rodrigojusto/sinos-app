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

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={StyleSheet.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="fadeInDown"
                source={require('../../assets/Logo-Light.png')}
                style={{ width: '40%' }}
                resizeMode="contain"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Project')}>
                <Text style={styles.buttonText}>Lançamento de Material Obra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Maintenance')}>
                <Text style={styles.buttonText}>Lançamento de Material Manutenção</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
    },
    containerLogo:{
        backgroundColor: '#fff',
        alignItems:'center',
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
        position:'relative',
        backgroundColor: '#08665d',
        borderRadius: 50,
        margin: 10,
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
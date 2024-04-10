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
                style={{ width: '50%', marginBottom: '20%' }}
                resizeMode="contain"
                />
                <Text style={styles.title} >Selecione a Obra</Text>
            </View>
            <View style={styles.containerActions}>
                <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Project')}>
                    <Text style={styles.buttonText}>Material de Obras</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Maintenance')}>
                    <Text style={styles.buttonText}>Material de Manutenção</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    containerLogo:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
    },
    containerActions:{
        flex:1,
        backgroundColor:'#fff',
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
        alignContent: 'center',
    }

})
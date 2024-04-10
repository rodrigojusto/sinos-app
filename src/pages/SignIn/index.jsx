import React, { useState } from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";


export default function SignIn(){
    const navigation = useNavigation();
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);

    async function sendForm(){
        let response=await fetch('172.16.30.7:3333/session', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user,
                password: password
            })
        });
        let json=await response.json();
        console.log(json)
    }

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Login</Text>    
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={700} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder="Digite o email"
                style={styles.input}
                onChangeText={text=>setUser(text)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                onChangeText={text=>setPassword(text)}
                secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={ ()=> sendForm()}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d',
        

    },
    containerHeader:{
        marginTop:'14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
    },
    containerForm:{
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        top:'20%',
        bottom: '30%',
    },
    title:{
        fontSize: 20,
        marginTop:28,
    },
    input:{
        borderBottomWidth:1,
        height: 40,
        marginBottom: 12,
        fontSize:16,
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})
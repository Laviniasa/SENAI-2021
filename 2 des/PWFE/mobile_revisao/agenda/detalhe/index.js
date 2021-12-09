import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import style from './style.js';

import styles from './style.js';

export default function home({navigation}){

    const json = [

        {

            "Tarefa": "Alimentar o cachorro",

            "Data": "2021-12-09",

            "Descriçao": "Abrir o saco de ração e colocar no pote"

        },

        {

            "Tarefa": "Alimentar o cachorro",

            "Data": "2021-12-09",

            "Descriçao": "Abrir o saco de ração e colocar no pote"

        },

        {

            "Tarefa": "Alimentar o cachorro",

            "Data": "2021-12-09",

            "Descriçao": "Abrir o saco de ração e colocar no pote"

        },

        {

            "Tarefa": "Alimentar o cachorro",

            "Data": "2021-12-09",

            "Descriçao": "Abrir o saco de ração e colocar no pote"

        }

    ]

    return (

        <View>

            {json.map((item, index) =>

                <TouchableOpacity style={style.card} key={index} onPress={()=>{navigation.navigate('detalhe',item)}}>

                    <Text>{item.Tarefa}</Text>

                    <Text>{item.Data}</Text>

                </TouchableOpacity>

            )}

        </View>

    )

}
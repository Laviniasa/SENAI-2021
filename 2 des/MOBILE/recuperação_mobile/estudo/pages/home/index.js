import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView  } from 'react-native'
import style from './style.js'

export default function Home({ navigation }) {
    
    const[lista,setLista]= useState([]);

    useEffect(() =>{
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
        .then(resp =>{ return resp.json();})
        .then(data =>{setLista(data.results);});
    },[]);
    
    return (
        <ScrollView style={style.home}>
            <View>
            {
                lista.map((item,index)=>{
                    return(
                        <TouchableOpacity style={style.conteiner} key={index} onPress={()=>{navigation.navigate("Detalhes",{id:item.name})}}>
                            <Text style={style.conteiner_text}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            </View>
        </ScrollView>
    );
}

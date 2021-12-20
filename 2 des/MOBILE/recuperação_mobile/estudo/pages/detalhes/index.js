import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView} from "react-native";
import style from "./style.js";


export default function Detalhes({route}) {
    const {id} = route.name;
    const[Detalhes, setDetalhes] = useState({
        "nomeDetalhes": "",
        "detalhes": [
            {
                "name": "é sobre isso",
                "url": "",
              },
            
        ],
        "nameCoach": ""
    });

    useEffect(() => {
        let url ="https://pokeapi.co/api/v2/pokemon"+id
        fetch(url, {
            method: "GET"
        })

        .then(resp => { return resp.json();})
        .then(data => { console.log(data.resp);setDetalhes(data.resp);})

    },[]);
    return(
        <ScrollView style={style.tela}>
            {
                Detalhes.detalhes.map((e, index) => {
                    return(
                        <TouchableOpacity style={style.touc} key={index}>
                            <Text style={style.texto}>{Detalhes.id}</Text>
                            <View>
                                <Text style={style.texto2}>{e.id}</Text>
                                <Text style={style.texto2}>{e.name}</Text>
                            </View>
                            <Text  style={style.texto}>{Detalhes.idCoach}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}


import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";


export default function Equipe({route}) {
    const {id} = route.params;
    const[equipe, setEquipe] = useState([]);
    

    useEffect(() => {
        let url ="http://10.87.207.20:8080/api/equipe/"+id;

        fetch(url)
        .then(resp => { return resp.json();})
        .then(data => { console.log(data);setEquipe(data); })
    },[]);
    return(
        <View>
            <Text>{equipe.nomeEquipe}</Text>

        </View>
    )
}


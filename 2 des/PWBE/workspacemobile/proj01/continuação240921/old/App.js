import React, { useState } from "react";

import{ View, Text, TouchableOpacity, Image } from 'react-native';
import style from "./style.js";

import styles from './style.js';

export default function App() {
  const [value, setValue] = useState("");

  const star = require('./assets/star.png');
const nome = " Lavínia";

const data = [
  {
    nome:"Reenye Lanches",
    nota: 6 
  },
  {
    nome:"Migue e Aliche",
    nota: 5
  },
  {
    nome:"Tia Beth",
    nota: 4
  },
  {
    nome: "marchesini",
    nota: 2
  },
];
  return(

    <View style={styles.container} >
      <Text style={styles.title}> Olá, {value} !</Text>
      {
        data.map((restaurante, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card} 
            onPress={()=> {setValue(restaurante.nome)}}>
              <Text style={style.nomeLoja}>{restaurante.nome}</Text>
            <View style={styles.nota}>
              <Text style={style.notaloja}>{restaurante.nota}</Text>
              <Image
                source={{uri:'https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'}}
                style={style.star}>
              </Image>
            </View>
            </TouchableOpacity>
          );
        })
      }
  </View>
  );
}


import React from "react";

import { View, Text, Button, Image } from 'react-native';

export default function Restaurante({route, navigation}) {
    const{ nome, nota, endereco, imagem, telefone } = route.params;

    return (
        <View>
            <Image source={imagem} style={{width: '100vw', height: '30vh'}} />
            <Text>{nome}</Text>
            <Button 
            title="Voltar para HOME"
            onPress={ () =>{navigation.goBack();} }
            />
        </View>
    );
}
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function Card({title}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: title.image}} style={styles.image}/>
            <Text style={styles.name}>{title.name}</Text>
            <Text style={styles.status}>{title.status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'orange',
        marginBottom: 2,
        borderRadius: 12,
    },
    image: {
        alignSelf: "center",
        width: 100,
        height: 100
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25
    },
    status: {
        alignSelf: 'center'
    }
})

export default Card;
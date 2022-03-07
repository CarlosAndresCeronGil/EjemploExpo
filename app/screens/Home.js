import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import apiCharacters from "../api/characters";
import listingsApi from '../api/listings';

function Home(props) {
  const datos = [
    {
      id: 1,
      titulo: "T1",
      descripcion: "Descripción 1",
    },
    {
      id: 2,
      titulo: "T2",
      descripcion: "Descripción 2",
    },
  ];
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    loadCharacters();
    console.log(characters);
  }, []);

  const loadCharacters = async () => {
    const response = await listingsApi.getListings();
    setCharacters(response.data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={character => character.id.toString()}
        renderItem={({ item }) => <Card title={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
});

export default Home;

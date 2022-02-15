import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContex = createContext(null);

export const DataProvider = ({ children }) => {
  const [album, setAlbum] = useState([]);

  const DataFromApi = () => {

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/album_tracks/',
        params: {id: '3IBcauSj5M2A6lTeffJzdv', offset: '0', limit: '300'},
        headers: {
          'x-rapidapi-host': 'spotify23.p.rapidapi.com',
          'x-rapidapi-key': 'eed5de033cmsh00d7be4071d3c36p183f53jsnc58326769e59'
        }
      };
    try {
      axios.request(options).then(response => {
        setAlbum(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    DataFromApi();
  }, []);

  return (
    <DataContex.Provider value={album}>
      {children}
    </DataContex.Provider>
  );
};

export default DataContex;

const styles = StyleSheet.create({});

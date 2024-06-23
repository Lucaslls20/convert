import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity  style={styles.buttum}   onPress={() => navigation.navigate('Medida Linear')}>
        <Text style={styles.text}>Medidas Lineares</Text>
      </TouchableOpacity>
   
      <TouchableOpacity style={styles.buttum} onPress={() => navigation.navigate('Medida de Área')}>
        <Text style={styles.text}>Medidas de Área</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttum} onPress={() => navigation.navigate('Medida de Volume')}>
        <Text style={styles.text}>Medidas de Volume</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'green',
  
  },
  text: {
    fontSize: 20,
    color: '#2106F5'
  },
  buttum:{
    borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 20,
        width: '85%',
        borderRadius: 4,
        alignItems: 'center',
        borderColor:'#a42f1b',
  }
});

export default Home;

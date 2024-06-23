import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, Button, FlatList, SafeAreaView } from "react-native";

const Medida3 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [first, setFirst] = useState('');
  const [firstUnid, setFirstUnid] = useState('Metro');
  const [outUnid, setOutUnid] = useState('Kilometro');
  const [result, setResult] = useState('');
  const [modalType, setModalType] = useState('');

  const unidades = ['Centimetro\u00B3', 'Metro\u00B3', 'Kilometro\u00B3'];

  const convert = () => {
    let value = parseFloat(first);
    if (isNaN(value)) {
      return setResult('Insira um valor Válido');
    }

    switch (firstUnid) {
      case 'Centimetro\u00B3':
        if (outUnid === 'Metro\u00B3') value *= 0.000001;
        else if (outUnid === 'Kilometro\u00B3') value *= 0.000000000000001;
        break;
      case 'Metro\u00B3':
        if (outUnid === 'Centimetro\u00B3') value *= 1000000;
        else if (outUnid === 'Kilometro\u00B3') value *= 0.000000001;
        break;
      case 'Kilometro\u00B3':
        if (outUnid === 'Centimetro\u00B3') value *= 1000000000000000;
        else if (outUnid === 'Metro\u00B3') value *= 1000000000;
        break;
      default:
        break;
    }

    setResult(`O Resultado é: ${value} ${outUnid}`);
  };

  const clearResult = () => {
    setResult('');
    setFirst('');
  };

  const Visible = (type) => {
    setModalVisible(true);
    setModalType(type);
  };

  const selectUnit = (unit) => {
    if (modalType === 'first') {
      setFirstUnid(unit);
    } else {
      setOutUnid(unit);
    }
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Unidades de Volume</Text>
        <Text style={styles.subtitle}>Teste agora</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o valor"
          keyboardType='numeric'
          value={first}
          onChangeText={setFirst}
          placeholderTextColor='#00008b'
        />

        <TouchableOpacity style={styles.pickerButton} onPress={() => Visible('first')}>
          <Text style={styles.pickerButtonText}>{firstUnid}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pickerButton} onPress={() => Visible('second')}>
          <Text style={styles.pickerButtonText}>{outUnid}</Text>
        </TouchableOpacity>

        <View style={styles.orderButtom}>
          <View style={styles.orderButtom} >
            <Button title="Converter" onPress={convert} style={styles.button} />
          </View>
          <View style={styles.orderButtom}>
            <Button title="Limpar" onPress={clearResult} style={styles.button} />
          </View>
        </View>

        <Text style={styles.result}>{result}</Text>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <FlatList
              data={unidades}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => selectUnit(item)}>
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12131B',
  },
  content: {
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF'
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 20,
    width: '100%',
    borderRadius: 4,
    borderColor: '#993399',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red'
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 20,
    width: '100%',
    borderRadius: 4,
    alignItems: 'center',
    borderColor: '#000080',
  },
  pickerButtonText: {
    fontSize: 18,
    color: '#00008b',
    fontWeight: 'bold'
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    color: '#FFF'
  },
  modalView: {
    marginTop: '50%',
    marginHorizontal: '10%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold'
  },
  orderButtom: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  }
});

export default Medida3;

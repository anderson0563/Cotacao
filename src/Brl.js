import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';

export const Brl = () => {
  const [cotacoes, setCotacoes] = useState('');
  const [brl, setBrl] = useState('');

  const recuperarCotacao = () => {
    Keyboard.dismiss();
    try {
      const jsonData = JSON.parse(cotacoes);
      console.log(jsonData.date);
      if (jsonData.usd.brl) setBrl(jsonData.usd.brl);
    } catch (error) {
      alert('JSON Error');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text style={styles.header}>Cotações:</Text>
      <TextInput
        multiline
        onChangeText={setCotacoes}
        value={cotacoes}
        style={styles.input}
      />
      <Button title="USD -> BRL" onPress={recuperarCotacao} />
      <View style={styles.resultContainer}>
        <Text>R$ {brl}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    padding: 8,
  },
  resultContainer: {
    marginTop: 16,
  },
});
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchInput({ value, onChangeText, placeholder }) {
  return (
    <View style={styles.buscaContainer}>
      <TextInput style={styles.buscaInput} placeholder={placeholder} value={value} onChangeText={onChangeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  buscaContainer: { padding: 10, backgroundColor: '#fff' },
  buscaInput: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, fontSize: 14 },
});

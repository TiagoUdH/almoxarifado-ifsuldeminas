import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function FormField({ label, style, inputStyle, ...inputProps }) {
  return (
    <View style={[styles.field, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, inputStyle]} {...inputProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  field: { marginBottom: 15 },
  label: { fontSize: 14, color: '#555', marginBottom: 5, fontWeight: '600' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, fontSize: 14, borderWidth: 1, borderColor: '#ddd' },
});

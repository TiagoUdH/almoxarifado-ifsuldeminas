import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const VARIANTS = {
  primary: { container: { backgroundColor: '#1E90FF' }, text: { color: '#fff' } },
  secondary: { container: { backgroundColor: '#fff', borderWidth: 2, borderColor: '#1E90FF' }, text: { color: '#1E90FF' } },
  danger: { container: { backgroundColor: '#ff4444' }, text: { color: '#fff' } },
};

export default function Button({ label, onPress, variant = 'primary', style, textStyle }) {
  const variantStyle = VARIANTS[variant] || VARIANTS.primary;
  return (
    <TouchableOpacity style={[styles.base, variantStyle.container, style]} onPress={onPress}>
      <Text style={[styles.text, variantStyle.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: { padding: 15, borderRadius: 8, alignItems: 'center' },
  text: { fontSize: 16, fontWeight: 'bold' },
});

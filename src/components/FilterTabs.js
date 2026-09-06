import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FilterTabs({ options, value, onChange }) {
  return (
    <View style={styles.filtros}>
      {options.map(opt => (
        <TouchableOpacity
          key={opt.value}
          style={[styles.filtroButton, value === opt.value && styles.filtroAtivo]}
          onPress={() => onChange(opt.value)}
        >
          <Text style={[styles.filtroText, value === opt.value && styles.filtroTextAtivo]}>{opt.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  filtros: { flexDirection: 'row', padding: 10, backgroundColor: '#fff', justifyContent: 'space-around' },
  filtroButton: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, backgroundColor: '#f0f0f0' },
  filtroAtivo: { backgroundColor: '#1E90FF' },
  filtroText: { fontSize: 12, color: '#666' },
  filtroTextAtivo: { color: '#fff', fontWeight: 'bold' },
});

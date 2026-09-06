import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MenuItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, marginBottom: 8, borderRadius: 10, elevation: 1 },
  menuIcon: { fontSize: 20, marginRight: 15 },
  menuText: { fontSize: 15, color: '#333' },
});

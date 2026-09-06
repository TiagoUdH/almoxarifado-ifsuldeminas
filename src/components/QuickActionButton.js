import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function QuickActionButton({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: { backgroundColor: '#fff', padding: 15, margin: 5, borderRadius: 10, alignItems: 'center', flex: 1, minWidth: '40%', elevation: 2 },
  actionIcon: { fontSize: 24, marginBottom: 5 },
  actionText: { fontSize: 12, color: '#333', textAlign: 'center' },
});

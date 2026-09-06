import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatCard({ number, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: { backgroundColor: '#fff', padding: 15, margin: 5, borderRadius: 10, alignItems: 'center', flex: 1, minWidth: '40%', elevation: 2 },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#1E90FF' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 5, textAlign: 'center' },
});

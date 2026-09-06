import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MovimentacaoItem({ tipo, desc, data, descStyle }) {
  return (
    <View style={styles.movimentacaoCard}>
      <Text style={styles.movimentacaoTipo}>{tipo}</Text>
      <Text style={[styles.movimentacaoDesc, descStyle]}>{desc}</Text>
      <Text style={styles.movimentacaoData}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  movimentacaoCard: { backgroundColor: '#fff', padding: 12, marginBottom: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 1 },
  movimentacaoTipo: { fontSize: 12, fontWeight: 'bold', color: '#1E90FF' },
  movimentacaoDesc: { fontSize: 14, color: '#333', flex: 1, marginLeft: 10 },
  movimentacaoData: { fontSize: 11, color: '#999' },
});

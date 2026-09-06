import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoricoCard({ tipo, item, quantidade, responsavel, setor, data }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={[styles.tipoBadge, { backgroundColor: tipo === 'entrada' ? '#00C851' : '#ff4444' }]}>
          <Text style={styles.tipoText}>{tipo === 'entrada' ? 'Entrada' : 'Saída'}</Text>
        </View>
        <Text style={styles.dataText}>{data}</Text>
      </View>
      <Text style={styles.itemText}>{item} - {quantidade}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.responsavelText}>👤 {responsavel}</Text>
        <Text style={styles.setorText}>🏢 {setor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 10, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  tipoBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  tipoText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  dataText: { fontSize: 11, color: '#999' },
  itemText: { fontSize: 15, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  responsavelText: { fontSize: 12, color: '#666' },
  setorText: { fontSize: 12, color: '#666' },
});

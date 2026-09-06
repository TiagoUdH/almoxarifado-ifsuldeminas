import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StatusBadge from './StatusBadge';

export default function ItemCard({ nome, categoria, quantidade, unidade, status, onPress }) {
  return (
    <TouchableOpacity style={styles.itemCard} onPress={onPress}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemNome}>{nome}</Text>
        <Text style={styles.itemCategoria}>{categoria}</Text>
      </View>
      <View style={styles.itemEstoque}>
        <Text style={styles.itemQuantidade}>{quantidade} {unidade}</Text>
        <StatusBadge color={status.cor} text={status.texto} style={{ marginTop: 5 }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemCard: { backgroundColor: '#fff', padding: 15, marginBottom: 8, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 2 },
  itemInfo: { flex: 1 },
  itemNome: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemCategoria: { fontSize: 12, color: '#666', marginTop: 4 },
  itemEstoque: { alignItems: 'flex-end' },
  itemQuantidade: { fontSize: 14, fontWeight: 'bold', color: '#333' },
});

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ItemDetalheScreen({ route, navigation }) {
  const { item } = route.params;

  const getStatusEstoque = (quantidade, minimo) => {
    if (quantidade <= minimo) return { cor: '#ff4444', texto: 'Estoque Baixo' };
    if (quantidade <= minimo * 2) return { cor: '#ffaa00', texto: 'Atenção' };
    return { cor: '#00C851', texto: 'Normal' };
  };

  const status = getStatusEstoque(item.quantidade, item.minimo);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.itemNome}>{item.nome}</Text>
        <View style={[styles.statusBadge, { backgroundColor: status.cor }]}>
          <Text style={styles.statusText}>{status.texto}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Item</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Categoria:</Text>
            <Text style={styles.infoValue}>{item.categoria}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Quantidade Atual:</Text>
            <Text style={styles.infoValue}>{item.quantidade} {item.unidade}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estoque Mínimo:</Text>
            <Text style={styles.infoValue}>{item.minimo} {item.unidade}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Unidade de Medida:</Text>
            <Text style={styles.infoValue}>{item.unidade}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Últimas Movimentações</Text>
        <View style={styles.movimentacaoCard}>
          <Text style={styles.movimentacaoTipo}>Saída</Text>
          <Text style={styles.movimentacaoDesc}>10 resmas - João Silva</Text>
          <Text style={styles.movimentacaoData}>31/08/2026</Text>
        </View>
        <View style={styles.movimentacaoCard}>
          <Text style={styles.movimentacaoTipo}>Entrada</Text>
          <Text style={styles.movimentacaoDesc}>50 resmas - Fornecedor X</Text>
          <Text style={styles.movimentacaoData}>25/08/2026</Text>
        </View>
        <View style={styles.movimentacaoCard}>
          <Text style={styles.movimentacaoTipo}>Saída</Text>
          <Text style={styles.movimentacaoDesc}>15 resmas - Maria Santos</Text>
          <Text style={styles.movimentacaoData}>20/08/2026</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Entrada')}>
          <Text style={styles.buttonText}>Registrar Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.navigate('Saida')}>
          <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Registrar Saída</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#1E90FF', padding: 20, alignItems: 'center' },
  itemNome: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  statusBadge: { paddingHorizontal: 15, paddingVertical: 6, borderRadius: 15 },
  statusText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  section: { padding: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 10, textTransform: 'uppercase' },
  infoCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, elevation: 2 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  infoLabel: { fontSize: 14, color: '#666' },
  infoValue: { fontSize: 14, color: '#333', fontWeight: '600' },
  movimentacaoCard: { backgroundColor: '#fff', padding: 12, marginBottom: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 1 },
  movimentacaoTipo: { fontSize: 12, fontWeight: 'bold', color: '#1E90FF' },
  movimentacaoDesc: { fontSize: 13, color: '#333', flex: 1, marginLeft: 10 },
  movimentacaoData: { fontSize: 11, color: '#999' },
  actions: { padding: 15 },
  button: { backgroundColor: '#1E90FF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  buttonSecondary: { backgroundColor: '#fff', borderWidth: 2, borderColor: '#1E90FF' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  buttonTextSecondary: { color: '#1E90FF' },
});

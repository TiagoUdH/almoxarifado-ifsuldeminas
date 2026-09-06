import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StatusBadge from '../components/StatusBadge';
import InfoRow from '../components/InfoRow';
import MovimentacaoItem from '../components/MovimentacaoItem';
import Button from '../components/Button';
import { getStatusEstoque } from '../utils/estoque';

export default function ItemDetalheScreen({ route, navigation }) {
  const { item } = route.params;
  const status = getStatusEstoque(item.quantidade, item.minimo);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.itemNome}>{item.nome}</Text>
        <StatusBadge color={status.cor} text={status.texto} size="large" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Item</Text>
        <View style={styles.infoCard}>
          <InfoRow label="Categoria:" value={item.categoria} />
          <InfoRow label="Quantidade Atual:" value={`${item.quantidade} ${item.unidade}`} />
          <InfoRow label="Estoque Mínimo:" value={`${item.minimo} ${item.unidade}`} />
          <InfoRow label="Unidade de Medida:" value={item.unidade} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Últimas Movimentações</Text>
        <MovimentacaoItem tipo="Saída" desc="10 resmas - João Silva" data="31/08/2026" descStyle={{ fontSize: 13 }} />
        <MovimentacaoItem tipo="Entrada" desc="50 resmas - Fornecedor X" data="25/08/2026" descStyle={{ fontSize: 13 }} />
        <MovimentacaoItem tipo="Saída" desc="15 resmas - Maria Santos" data="20/08/2026" descStyle={{ fontSize: 13 }} />
      </View>

      <View style={styles.actions}>
        <Button label="Registrar Entrada" onPress={() => navigation.navigate('Entrada')} style={{ marginBottom: 10 }} />
        <Button label="Registrar Saída" variant="secondary" onPress={() => navigation.navigate('Saida')} style={{ marginBottom: 10 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#1E90FF', padding: 20, alignItems: 'center' },
  itemNome: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  section: { padding: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 10, textTransform: 'uppercase' },
  infoCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, elevation: 2 },
  actions: { padding: 15 },
});

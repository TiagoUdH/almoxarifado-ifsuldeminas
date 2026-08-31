import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const historicoMock = [
  { id: '1', tipo: 'saida', item: 'Papel A4', quantidade: '10 resmas', responsavel: 'João Silva', setor: 'Administrativo', data: '31/08/2026 10:30' },
  { id: '2', tipo: 'entrada', item: 'Toner HP 83A', quantidade: '5 unidades', responsavel: 'Maria Santos', setor: 'TI', data: '31/08/2026 08:15' },
  { id: '3', tipo: 'saida', item: 'Caneta Esferográfica', quantidade: '50 unidades', responsavel: 'Pedro Costa', setor: 'RH', data: '30/08/2026 16:45' },
  { id: '4', tipo: 'entrada', item: 'Cabo de Rede Cat5e', quantidade: '100 metros', responsavel: 'Ana Oliveira', setor: 'TI', data: '30/08/2026 14:20' },
  { id: '5', tipo: 'saida', item: 'Álcool 70%', quantidade: '5 litros', responsavel: 'Carlos Lima', setor: 'Limpeza', data: '30/08/2026 11:00' },
  { id: '6', tipo: 'entrada', item: 'Lâmpada LED 9W', quantidade: '20 unidades', responsavel: 'José Alves', setor: 'Manutenção', data: '29/08/2026 15:30' },
  { id: '7', tipo: 'saida', item: 'Café 500g', quantidade: '3 pacotes', responsavel: 'Lucia Ferreira', setor: 'Copa', data: '29/08/2026 09:45' },
  { id: '8', tipo: 'entrada', item: 'Grampeador', quantidade: '10 unidades', responsavel: 'Roberto Dias', setor: 'Papelaria', data: '28/08/2026 13:15' },
];

export default function HistoricoScreen() {
  const [filtro, setFiltro] = useState('todos');

  const historicoFiltrado = filtro === 'todos'
    ? historicoMock
    : historicoMock.filter(h => h.tipo === filtro);

  return (
    <View style={styles.container}>
      <View style={styles.filtros}>
        <TouchableOpacity
          style={[styles.filtroButton, filtro === 'todos' && styles.filtroAtivo]}
          onPress={() => setFiltro('todos')}
        >
          <Text style={[styles.filtroText, filtro === 'todos' && styles.filtroTextAtivo]}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filtroButton, filtro === 'entrada' && styles.filtroAtivo]}
          onPress={() => setFiltro('entrada')}
        >
          <Text style={[styles.filtroText, filtro === 'entrada' && styles.filtroTextAtivo]}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filtroButton, filtro === 'saida' && styles.filtroAtivo]}
          onPress={() => setFiltro('saida')}
        >
          <Text style={[styles.filtroText, filtro === 'saida' && styles.filtroTextAtivo]}>Saídas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={historicoFiltrado}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.tipoBadge, { backgroundColor: item.tipo === 'entrada' ? '#00C851' : '#ff4444' }]}>
                <Text style={styles.tipoText}>{item.tipo === 'entrada' ? 'Entrada' : 'Saída'}</Text>
              </View>
              <Text style={styles.dataText}>{item.data}</Text>
            </View>
            <Text style={styles.itemText}>{item.item} - {item.quantidade}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.responsavelText}>👤 {item.responsavel}</Text>
              <Text style={styles.setorText}>🏢 {item.setor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  filtros: { flexDirection: 'row', padding: 10, backgroundColor: '#fff', justifyContent: 'space-around' },
  filtroButton: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, backgroundColor: '#f0f0f0' },
  filtroAtivo: { backgroundColor: '#1E90FF' },
  filtroText: { fontSize: 12, color: '#666' },
  filtroTextAtivo: { color: '#fff', fontWeight: 'bold' },
  listContent: { padding: 10 },
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

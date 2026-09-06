import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import FilterTabs from '../components/FilterTabs';
import HistoricoCard from '../components/HistoricoCard';

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

const FILTRO_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'entrada', label: 'Entradas' },
  { value: 'saida', label: 'Saídas' },
];

export default function HistoricoScreen() {
  const [filtro, setFiltro] = useState('todos');

  const historicoFiltrado = filtro === 'todos'
    ? historicoMock
    : historicoMock.filter(h => h.tipo === filtro);

  return (
    <View style={styles.container}>
      <FilterTabs options={FILTRO_OPTIONS} value={filtro} onChange={setFiltro} />

      <FlatList
        data={historicoFiltrado}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <HistoricoCard
            tipo={item.tipo}
            item={item.item}
            quantidade={item.quantidade}
            responsavel={item.responsavel}
            setor={item.setor}
            data={item.data}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  listContent: { padding: 10 },
});

import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SearchInput from '../components/SearchInput';
import ItemCard from '../components/ItemCard';
import { getStatusEstoque } from '../utils/estoque';

const itensMock = [
  { id: '1', nome: 'Papel A4', categoria: 'Papelaria', quantidade: 150, unidade: 'resmas', minimo: 20 },
  { id: '2', nome: 'Toner HP 83A', categoria: 'Informática', quantidade: 8, unidade: 'unidades', minimo: 5 },
  { id: '3', nome: 'Caneta Esferográfica Azul', categoria: 'Papelaria', quantidade: 200, unidade: 'unidades', minimo: 50 },
  { id: '4', nome: 'Grampeador', categoria: 'Papelaria', quantidade: 3, unidade: 'unidades', minimo: 5 },
  { id: '5', nome: 'Cabo de Rede Cat5e', categoria: 'Informática', quantidade: 50, unidade: 'metros', minimo: 20 },
  { id: '6', nome: 'Lâmpada LED 9W', categoria: 'Elétrica', quantidade: 12, unidade: 'unidades', minimo: 10 },
  { id: '7', nome: 'Álcool 70%', categoria: 'Limpeza', quantidade: 25, unidade: 'litros', minimo: 10 },
  { id: '8', nome: 'Café 500g', categoria: 'Copa', quantidade: 15, unidade: 'pacotes', minimo: 5 },
];

export default function ItensScreen({ navigation }) {
  const [busca, setBusca] = useState('');
  const [itens] = useState(itensMock);

  const itensFiltrados = itens.filter(item =>
    item.nome.toLowerCase().includes(busca.toLowerCase()) ||
    item.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchInput placeholder="Buscar item ou categoria..." value={busca} onChangeText={setBusca} />

      <FlatList
        data={itensFiltrados}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ItemCard
            nome={item.nome}
            categoria={item.categoria}
            quantidade={item.quantidade}
            unidade={item.unidade}
            status={getStatusEstoque(item.quantidade, item.minimo, true)}
            onPress={() => navigation.navigate('ItemDetalhe', { item })}
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

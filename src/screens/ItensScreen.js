import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

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

  const getStatusEstoque = (quantidade, minimo) => {
    if (quantidade <= minimo) return { cor: '#ff4444', texto: 'Baixo' };
    if (quantidade <= minimo * 2) return { cor: '#ffaa00', texto: 'Atenção' };
    return { cor: '#00C851', texto: 'Normal' };
  };

  return (
    <View style={styles.container}>
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar item ou categoria..."
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={itensFiltrados}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const status = getStatusEstoque(item.quantidade, item.minimo);
          return (
            <TouchableOpacity
              style={styles.itemCard}
              onPress={() => navigation.navigate('ItemDetalhe', { item })}
            >
              <View style={styles.itemInfo}>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <Text style={styles.itemCategoria}>{item.categoria}</Text>
              </View>
              <View style={styles.itemEstoque}>
                <Text style={styles.itemQuantidade}>
                  {item.quantidade} {item.unidade}
                </Text>
                <View style={[styles.statusBadge, { backgroundColor: status.cor }]}>
                  <Text style={styles.statusText}>{status.texto}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  buscaContainer: { padding: 10, backgroundColor: '#fff' },
  buscaInput: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, fontSize: 14 },
  listContent: { padding: 10 },
  itemCard: { backgroundColor: '#fff', padding: 15, marginBottom: 8, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 2 },
  itemInfo: { flex: 1 },
  itemNome: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemCategoria: { fontSize: 12, color: '#666', marginTop: 4 },
  itemEstoque: { alignItems: 'flex-end' },
  itemQuantidade: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginTop: 5 },
  statusText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
});

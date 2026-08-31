import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function EntradaScreen() {
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [notaFiscal, setNotaFiscal] = useState('');
  const [dataEntrada, setDataEntrada] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleRegistrar = () => {
    Alert.alert('Entrada Registrada', 'A entrada de material foi registrada com sucesso!');
    setItem('');
    setQuantidade('');
    setUnidade('');
    setFornecedor('');
    setNotaFiscal('');
    setDataEntrada('');
    setObservacoes('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Registrar Entrada de Material</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Item / Material</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Papel A4, Toner HP..."
            value={item}
            onChangeText={setItem}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.field, { flex: 1 }]}>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              value={quantidade}
              onChangeText={setQuantidade}
            />
          </View>
          <View style={[styles.field, { flex: 1, marginLeft: 10 }]}>
            <Text style={styles.label}>Unidade</Text>
            <TextInput
              style={styles.input}
              placeholder="un, kg, L..."
              value={unidade}
              onChangeText={setUnidade}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Fornecedor</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do fornecedor"
            value={fornecedor}
            onChangeText={setFornecedor}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Nota Fiscal</Text>
          <TextInput
            style={styles.input}
            placeholder="Número da NF"
            value={notaFiscal}
            onChangeText={setNotaFiscal}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Data de Entrada</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={dataEntrada}
            onChangeText={setDataEntrada}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Observações</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Observações adicionais..."
            multiline
            value={observacoes}
            onChangeText={setObservacoes}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegistrar}>
          <Text style={styles.buttonText}>Registrar Entrada</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  form: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  field: { marginBottom: 15 },
  label: { fontSize: 14, color: '#555', marginBottom: 5, fontWeight: '600' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, fontSize: 14, borderWidth: 1, borderColor: '#ddd' },
  row: { flexDirection: 'row' },
  button: { backgroundColor: '#1E90FF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

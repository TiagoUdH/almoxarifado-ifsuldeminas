import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import FormField from '../components/FormField';
import Button from '../components/Button';

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

        <FormField
          label="Item / Material"
          placeholder="Ex: Papel A4, Toner HP..."
          value={item}
          onChangeText={setItem}
        />

        <View style={styles.row}>
          <FormField
            label="Quantidade"
            style={{ flex: 1 }}
            placeholder="0"
            keyboardType="numeric"
            value={quantidade}
            onChangeText={setQuantidade}
          />
          <FormField
            label="Unidade"
            style={{ flex: 1, marginLeft: 10 }}
            placeholder="un, kg, L..."
            value={unidade}
            onChangeText={setUnidade}
          />
        </View>

        <FormField
          label="Fornecedor"
          placeholder="Nome do fornecedor"
          value={fornecedor}
          onChangeText={setFornecedor}
        />

        <FormField
          label="Nota Fiscal"
          placeholder="Número da NF"
          value={notaFiscal}
          onChangeText={setNotaFiscal}
        />

        <FormField
          label="Data de Entrada"
          placeholder="DD/MM/AAAA"
          value={dataEntrada}
          onChangeText={setDataEntrada}
        />

        <FormField
          label="Observações"
          inputStyle={{ height: 80 }}
          placeholder="Observações adicionais..."
          multiline
          value={observacoes}
          onChangeText={setObservacoes}
        />

        <Button label="Registrar Entrada" onPress={handleRegistrar} style={{ marginTop: 10 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  form: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  row: { flexDirection: 'row' },
});

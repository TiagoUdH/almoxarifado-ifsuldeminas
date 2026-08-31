import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function SaidaScreen() {
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [solicitante, setSolicitante] = useState('');
  const [setor, setSetor] = useState('');
  const [finalidade, setFinalidade] = useState('');
  const [dataSaida, setDataSaida] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleRegistrar = () => {
    Alert.alert('Saída Registrada', 'A saída de material foi registrada com sucesso!');
    setItem('');
    setQuantidade('');
    setSolicitante('');
    setSetor('');
    setFinalidade('');
    setDataSaida('');
    setObservacoes('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Registrar Saída de Material</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Item / Material</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Papel A4, Toner HP..."
            value={item}
            onChangeText={setItem}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Quantidade</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={quantidade}
            onChangeText={setQuantidade}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Solicitante</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do solicitante"
            value={solicitante}
            onChangeText={setSolicitante}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Setor / Departamento</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: TI, Administrativo..."
            value={setor}
            onChangeText={setSetor}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Finalidade</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Motivo da solicitação..."
            multiline
            value={finalidade}
            onChangeText={setFinalidade}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Data de Saída</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={dataSaida}
            onChangeText={setDataSaida}
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
          <Text style={styles.buttonText}>Registrar Saída</Text>
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
  button: { backgroundColor: '#1E90FF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import FormField from '../components/FormField';
import Button from '../components/Button';

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

        <FormField
          label="Item / Material"
          placeholder="Ex: Papel A4, Toner HP..."
          value={item}
          onChangeText={setItem}
        />

        <FormField
          label="Quantidade"
          placeholder="0"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />

        <FormField
          label="Solicitante"
          placeholder="Nome do solicitante"
          value={solicitante}
          onChangeText={setSolicitante}
        />

        <FormField
          label="Setor / Departamento"
          placeholder="Ex: TI, Administrativo..."
          value={setor}
          onChangeText={setSetor}
        />

        <FormField
          label="Finalidade"
          inputStyle={{ height: 80 }}
          placeholder="Motivo da solicitação..."
          multiline
          value={finalidade}
          onChangeText={setFinalidade}
        />

        <FormField
          label="Data de Saída"
          placeholder="DD/MM/AAAA"
          value={dataSaida}
          onChangeText={setDataSaida}
        />

        <FormField
          label="Observações"
          inputStyle={{ height: 80 }}
          placeholder="Observações adicionais..."
          multiline
          value={observacoes}
          onChangeText={setObservacoes}
        />

        <Button label="Registrar Saída" onPress={handleRegistrar} style={{ marginTop: 10 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  form: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
});

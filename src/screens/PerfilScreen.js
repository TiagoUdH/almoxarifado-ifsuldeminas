import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Avatar from '../components/Avatar';
import InfoRow from '../components/InfoRow';
import MenuItem from '../components/MenuItem';
import Button from '../components/Button';

export default function PerfilScreen() {
  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja realmente sair do sistema?');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar initials="AS" />
        <Text style={styles.nome}>Administrador do Sistema</Text>
        <Text style={styles.email}>admin@muz.ifsuldeminas.edu.br</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Usuário</Text>
        <View style={styles.infoCard}>
          <InfoRow label="Nome:" value="Administrador" style={{ paddingVertical: 8 }} />
          <InfoRow label="Matrícula:" value="123456" style={{ paddingVertical: 8 }} />
          <InfoRow label="Cargo:" value="Almoxarife" style={{ paddingVertical: 8 }} />
          <InfoRow label="Campus:" value="Muz" style={{ paddingVertical: 8 }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        <MenuItem icon="🔔" label="Notificações" />
        <MenuItem icon="🔒" label="Alterar Senha" />
        <MenuItem icon="📱" label="Sobre o App" />
        <MenuItem icon="❓" label="Ajuda" />
      </View>

      <Button label="Sair do Sistema" variant="danger" onPress={handleLogout} style={{ margin: 15, borderRadius: 10 }} />

      <Text style={styles.versao}>Versão 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#1E90FF', padding: 30, alignItems: 'center' },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  email: { fontSize: 13, color: '#fff', marginTop: 5, opacity: 0.9 },
  section: { padding: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 10, textTransform: 'uppercase' },
  infoCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, elevation: 2 },
  versao: { textAlign: 'center', color: '#999', fontSize: 12, marginBottom: 20 },
});

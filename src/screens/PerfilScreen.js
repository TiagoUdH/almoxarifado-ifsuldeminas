import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function PerfilScreen() {
  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja realmente sair do sistema?');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AS</Text>
        </View>
        <Text style={styles.nome}>Administrador do Sistema</Text>
        <Text style={styles.email}>admin@muz.ifsuldeminas.edu.br</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Usuário</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoValue}>Administrador</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Matrícula:</Text>
            <Text style={styles.infoValue}>123456</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Cargo:</Text>
            <Text style={styles.infoValue}>Almoxarife</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Campus:</Text>
            <Text style={styles.infoValue}>Muz</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🔔</Text>
          <Text style={styles.menuText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🔒</Text>
          <Text style={styles.menuText}>Alterar Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>📱</Text>
          <Text style={styles.menuText}>Sobre o App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❓</Text>
          <Text style={styles.menuText}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair do Sistema</Text>
      </TouchableOpacity>

      <Text style={styles.versao}>Versão 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#1E90FF', padding: 30, alignItems: 'center' },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: '#1E90FF' },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  email: { fontSize: 13, color: '#fff', marginTop: 5, opacity: 0.9 },
  section: { padding: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 10, textTransform: 'uppercase' },
  infoCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, elevation: 2 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  infoLabel: { fontSize: 14, color: '#666' },
  infoValue: { fontSize: 14, color: '#333', fontWeight: '600' },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, marginBottom: 8, borderRadius: 10, elevation: 1 },
  menuIcon: { fontSize: 20, marginRight: 15 },
  menuText: { fontSize: 15, color: '#333' },
  logoutButton: { backgroundColor: '#ff4444', margin: 15, padding: 15, borderRadius: 10, alignItems: 'center' },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  versao: { textAlign: 'center', color: '#999', fontSize: 12, marginBottom: 20 },
});

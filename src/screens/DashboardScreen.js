import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IFSulDeMinas - Campus Muz</Text>
        <Text style={styles.headerSubtitle}>Almoxarifado</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>247</Text>
          <Text style={styles.statLabel}>Itens Cadastrados</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>18</Text>
          <Text style={styles.statLabel}>Estoque Baixo</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Saídas Hoje</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Entradas Hoje</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Entrada')}>
            <Text style={styles.actionIcon}>➕</Text>
            <Text style={styles.actionText}>Nova Entrada</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Saida')}>
            <Text style={styles.actionIcon}>➖</Text>
            <Text style={styles.actionText}>Nova Saída</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Itens')}>
            <Text style={styles.actionIcon}>📦</Text>
            <Text style={styles.actionText}>Consultar Itens</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Historico')}>
            <Text style={styles.actionIcon}>📋</Text>
            <Text style={styles.actionText}>Histórico</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Últimas Movimentações</Text>
        <View style={styles.movimentacaoCard}>
          <Text style={styles.movimentacaoTipo}>Saída</Text>
          <Text style={styles.movimentacaoDesc}>Papel A4 - 10 resmas</Text>
          <Text style={styles.movimentacaoData}>Hoje, 10:30</Text>
        </View>
        <View style={styles.movimentacaoCard}>
          <Text style={styles.movimentacaoTipo}>Entrada</Text>
          <Text style={styles.movimentacaoDesc}>Toner HP - 5 unidades</Text>
          <Text style={styles.movimentacaoData}>Hoje, 08:15</Text>
        </View>
        <View style={styles.movimentacaoCard}>
          <Text style={styles.movimentacaoTipo}>Saída</Text>
          <Text style={styles.movimentacaoDesc}>Caneta esferográfica - 50 un</Text>
          <Text style={styles.movimentacaoData}>Ontem, 16:45</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#1E90FF', padding: 20, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  headerSubtitle: { color: '#fff', fontSize: 14, marginTop: 4 },
  statsContainer: { flexDirection: 'row', flexWrap: 'wrap', padding: 10 },
  statCard: { backgroundColor: '#fff', padding: 15, margin: 5, borderRadius: 10, alignItems: 'center', flex: 1, minWidth: '40%', elevation: 2 },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#1E90FF' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 5, textAlign: 'center' },
  section: { padding: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  actionsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  actionButton: { backgroundColor: '#fff', padding: 15, margin: 5, borderRadius: 10, alignItems: 'center', flex: 1, minWidth: '40%', elevation: 2 },
  actionIcon: { fontSize: 24, marginBottom: 5 },
  actionText: { fontSize: 12, color: '#333', textAlign: 'center' },
  movimentacaoCard: { backgroundColor: '#fff', padding: 12, marginBottom: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 1 },
  movimentacaoTipo: { fontSize: 12, fontWeight: 'bold', color: '#1E90FF' },
  movimentacaoDesc: { fontSize: 14, color: '#333', flex: 1, marginLeft: 10 },
  movimentacaoData: { fontSize: 11, color: '#999' },
});

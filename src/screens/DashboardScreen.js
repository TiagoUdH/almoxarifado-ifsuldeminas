import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StatCard from '../components/StatCard';
import QuickActionButton from '../components/QuickActionButton';
import MovimentacaoItem from '../components/MovimentacaoItem';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IFSulDeMinas - Campus Muz</Text>
        <Text style={styles.headerSubtitle}>Almoxarifado</Text>
      </View>

      <View style={styles.statsContainer}>
        <StatCard number="247" label="Itens Cadastrados" />
        <StatCard number="18" label="Estoque Baixo" />
        <StatCard number="5" label="Saídas Hoje" />
        <StatCard number="2" label="Entradas Hoje" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.actionsContainer}>
          <QuickActionButton icon="➕" label="Nova Entrada" onPress={() => navigation.navigate('Entrada')} />
          <QuickActionButton icon="➖" label="Nova Saída" onPress={() => navigation.navigate('Saida')} />
          <QuickActionButton icon="📦" label="Consultar Itens" onPress={() => navigation.navigate('Itens')} />
          <QuickActionButton icon="📋" label="Histórico" onPress={() => navigation.navigate('Historico')} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Últimas Movimentações</Text>
        <MovimentacaoItem tipo="Saída" desc="Papel A4 - 10 resmas" data="Hoje, 10:30" />
        <MovimentacaoItem tipo="Entrada" desc="Toner HP - 5 unidades" data="Hoje, 08:15" />
        <MovimentacaoItem tipo="Saída" desc="Caneta esferográfica - 50 un" data="Ontem, 16:45" />
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
  section: { padding: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  actionsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
});

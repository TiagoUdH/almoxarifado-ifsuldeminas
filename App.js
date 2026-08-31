import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import DashboardScreen from './src/screens/DashboardScreen';
import ItensScreen from './src/screens/ItensScreen';
import EntradaScreen from './src/screens/EntradaScreen';
import SaidaScreen from './src/screens/SaidaScreen';
import HistoricoScreen from './src/screens/HistoricoScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import ItemDetalheScreen from './src/screens/ItemDetalheScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: '#1E90FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Itens"
        component={ItensScreen}
        options={{
          title: 'Itens',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>📦</Text>,
        }}
      />
      <Tab.Screen
        name="Entrada"
        component={EntradaScreen}
        options={{
          title: 'Entrada',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>➕</Text>,
        }}
      />
      <Tab.Screen
        name="Saida"
        component={SaidaScreen}
        options={{
          title: 'Saída',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>➖</Text>,
        }}
      />
      <Tab.Screen
        name="Historico"
        component={HistoricoScreen}
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>📋</Text>,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemDetalhe"
          component={ItemDetalheScreen}
          options={{ title: 'Detalhes do Item' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

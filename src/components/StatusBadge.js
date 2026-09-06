import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatusBadge({ color, text, size = 'small', style }) {
  return (
    <View style={[size === 'large' ? styles.badgeLarge : styles.badgeSmall, { backgroundColor: color }, style]}>
      <Text style={size === 'large' ? styles.textLarge : styles.textSmall}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeSmall: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  badgeLarge: { paddingHorizontal: 15, paddingVertical: 6, borderRadius: 15 },
  textSmall: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  textLarge: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
});

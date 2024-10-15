import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export function Loading() {
    return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Carregando...</Text>
        </View>
      );
}
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

export const DetailsScreen = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Profile</Text>
      </SafeAreaView>
    </Layout>
  )
}

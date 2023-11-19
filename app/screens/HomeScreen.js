import React from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Layout } from '@ui-kitten/components'

export const HomeScreen = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button>OPEN DETAILS</Button>
      </SafeAreaView>
    </Layout>
  )
}

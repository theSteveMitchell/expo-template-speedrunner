import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import theme from 'config/theme.json'
import { AppNavigator } from './app/navigation/AppNavigator'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

export default function App () {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  )
}

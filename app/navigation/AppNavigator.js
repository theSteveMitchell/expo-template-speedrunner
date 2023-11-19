import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from 'app/screens/HomeScreen'
import { DetailsScreen } from 'app/screens/ProfileScreen'
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components'

const PersonIcon = (props) => (
  <Icon name='person-outline' {...props} />
)

const HomeIcon = (props) => (
  <Icon name='home-outline' {...props} />
)

const { Navigator, Group, Screen } = createBottomTabNavigator()
const isLoggedIn = true

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home' icon={HomeIcon}/>
    <BottomNavigationTab title='Profile' icon={PersonIcon}/>
  </BottomNavigation>
)

const TabNavigator = () => (
  <Navigator
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{
      headerShown: false
    }}
  >
    {isLoggedIn
      ? (
      <Group>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Profile" component={DetailsScreen} />
      </Group>
        )
      : (
      <Group screenOptions={{ headerShown: false }}>
      </Group>
        )}
    <Group screenOptions={{ presentation: 'modal' }}>
    </Group>
  </Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
)

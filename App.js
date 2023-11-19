import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { SafeAreaView } from 'react-native';
import { ApplicationProvider, IconRegistry, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { default as theme } from 'config/theme.json';
import { AppNavigator } from './app/navigation/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  );
}
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import LightTheme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <ThemeProvider theme={LightTheme}>
      <StatusBar style="light" backgroundColor='transparent' translucent />
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
    </ThemeProvider>
  );
}

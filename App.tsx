import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Groups } from './src/screens/Groups';
import LightTheme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { Header } from '@components/Header';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <ThemeProvider theme={LightTheme}>
      <StatusBar style="light" backgroundColor='transparent' translucent />
      <Header />
      {
        fontsLoaded ? <Groups /> : <Loading />
      }
    </ThemeProvider>
  );
}

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Groups } from './src/screens/Groups';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Groups />
    </View>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups, NewGroup, Players } from '@screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='groups'
    >
      <Screen name="groups" component={Groups} />
      <Screen name="newGroup" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  )
}
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamsList } from "src/@types/navigation";

type routesNames = keyof RootParamsList

export type RouteProps<T extends routesNames> = {
  navigation: NativeStackNavigationProp<RootParamsList, T>
}
import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/app-error";
import { Group } from "src/types";

export async function groupCreate(newGroup: Group) {
  try {
    const storedGroups = await groupsGetAll();
    const groupAlreadyExista = storedGroups.map(group => group.title).includes(newGroup.title)

    if (groupAlreadyExista) throw new AppError('Já existe um grupo cadastrado com esse nome.')

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storedGroups, newGroup]))

    await AsyncStorage.removeItem(`${GROUP_COLLECTION}:unfinished`)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}:unfinished`)

  } catch (error) {
    throw error
  }
}
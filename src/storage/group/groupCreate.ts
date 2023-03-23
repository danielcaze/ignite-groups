import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/app-error";

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groupAlreadyExista = storedGroups.map(group => group.title).includes(newGroupName)

    if (groupAlreadyExista) throw new AppError('Já existe um grupo cadastrado com esse nome.')

    const newGroup = {
      id: storedGroups.length + 1,
      title: newGroupName
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storedGroups, newGroup]))
  } catch (error) {
    throw error
  }
}
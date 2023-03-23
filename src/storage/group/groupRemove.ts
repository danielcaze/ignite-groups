import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { Group } from "src/types";

export async function groupRemove(removedGroudName: string) {
  try {
    const stored = await AsyncStorage.getItem(GROUP_COLLECTION)
    const groups: Group[] = stored ? JSON.parse(stored) : []

    const groupsWithoutRemovedGroup = groups.filter(group => group.title !== removedGroudName)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groupsWithoutRemovedGroup))
  } catch (error) {
    throw error
  }
}
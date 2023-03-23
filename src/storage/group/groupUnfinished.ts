import AsyncStorage from "@react-native-async-storage/async-storage"
import { UNFINISHED_GROUP_COLLECTION } from "@storage/storageConfig"

export async function groupNameSave(groupName: string) {
  try {
    await AsyncStorage.setItem(UNFINISHED_GROUP_COLLECTION, groupName)
  } catch (error) {
    throw error
  }
}
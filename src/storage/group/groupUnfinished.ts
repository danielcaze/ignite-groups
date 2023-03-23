import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION } from "@storage/storageConfig"

export async function groupNameSave(groupName: string) {
  try {
    await AsyncStorage.setItem(`${GROUP_COLLECTION}:unfinished`, groupName)
  } catch (error) {
    throw error
  }
}
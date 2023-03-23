import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupGetUnfinished() {
  try {
    const groupUnfinished = await AsyncStorage.getItem(`${GROUP_COLLECTION}:unfinished`)

    return groupUnfinished || ''
  } catch (error) {
    throw error
  }
}
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UNFINISHED_GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupGetUnfinished() {
  try {
    const groupUnfinished = await AsyncStorage.getItem(UNFINISHED_GROUP_COLLECTION)

    return groupUnfinished || ''
  } catch (error) {
    throw error
  }
}
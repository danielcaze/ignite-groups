import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

export async function playersGetUnfinished() {
  try {
    const stored = await AsyncStorage.getItem(`${PLAYER_COLLECTION}:unfinished`)
    const playersUnfinished = stored ? JSON.parse(stored) : []
    return playersUnfinished
  } catch (error) {
    throw error
  }
}
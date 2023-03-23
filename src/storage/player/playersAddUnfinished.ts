import AsyncStorage from "@react-native-async-storage/async-storage"
import { PLAYER_COLLECTION } from "@storage/storageConfig"
import { Player } from "src/types"

export async function playersAddUnfinished(players: Player[]) {
  try {
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}:unfinished`, JSON.stringify(players))
  } catch (error) {
    throw error
  }
}
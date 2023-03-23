import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { Player } from "src/types";

export async function playerGetAllByGroup(group: string) {
  try {
    const stored = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    const players: Player[] = stored ? JSON.parse(stored) : [];
    return players
  } catch (error) {
    throw error
  }
}
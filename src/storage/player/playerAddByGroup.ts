import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playerGetAllByGroup } from "./playerGetAllByGroup";

export async function playerAddByGroup(newPlayer: string, group: string) {
  try {
    const players = await playerGetAllByGroup(group);

    const newTeamPlayer = {
      id: new Date().toISOString(),
      name: newPlayer
    }

    const storage = JSON.stringify([...players, newTeamPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error
  }
}
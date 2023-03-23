import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { Group, Player } from "src/types";

export async function playerGetAllByGroup(groupName: string) {
  try {
    const stored = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: Group[] = stored ? JSON.parse(stored) : [];
    const players: Player[] = groups.find(group => group.title === groupName)?.players ?? []

    return players
  } catch (error) {
    throw error
  }
}
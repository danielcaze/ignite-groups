import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  Button,
  GroupCard,
  Header,
  Highlight,
  ListEmpty,
  Loading
} from "@components";
import { Container } from "./styles";
import { Group, RouteProps } from "src/types";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups({ navigation }: RouteProps<'groups'>) {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<Group[]>([])

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  function handleOpenGroup(groupName: string) {
    navigation.navigate('players', { group: groupName })
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      {isLoading ? <Loading /> : (
        <FlatList
          data={groups}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GroupCard
              title={item.title}
              onPress={() => handleOpenGroup(item.title)}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
          showsVerticalScrollIndicator={false}
        />
      )}
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
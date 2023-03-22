import { useState } from "react";
import { FlatList } from "react-native";
import {
  Button,
  GroupCard,
  Header,
  Highlight,
  ListEmpty
} from "@components";
import { Container } from "./styles";
import { RouteProps } from "src/types";

type Group = {
  id: string,
  title: string,
}

export function Groups({ navigation }: RouteProps<'groups'>) {
  const [groups, setGroups] = useState<Group[]>([])

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GroupCard
            title={item.title}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
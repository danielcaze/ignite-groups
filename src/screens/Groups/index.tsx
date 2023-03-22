import {
  Button,
  GroupCard,
  Header,
  Highlight,
  ListEmpty
} from "@components";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

type Group = {
  id: string,
  title: string,
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])
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
      <Button title="Criar nova turma" />
    </Container>
  )
}
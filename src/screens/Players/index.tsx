import { useState } from 'react'
import {
  ButtonIcon,
  Filter, Header,
  Highlight,
  Input,
  PlayerCard,
  ListEmpty,
  Button
} from "@components";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
  const [players, setPlayers] = useState([])
  const [selectedTeam, setSelectedTeam] = useState('Time A')

  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon='add' />
      </Form>
      <HeaderList>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={selectedTeam === item}
              onPress={() => setSelectedTeam(item)}
            />
          )}
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time." />}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button title='Remover turma' type="SECONDARY" />

    </Container>
  )
}
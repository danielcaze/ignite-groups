import { useState } from 'react'
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { FlatList } from "react-native/Libraries/Lists/FlatList";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

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
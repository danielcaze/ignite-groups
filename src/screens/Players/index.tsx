import { useState } from 'react'
import { useRoute } from '@react-navigation/native';
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
import { RouteProps } from 'src/types';
import { Alert } from 'react-native/Libraries/Alert/Alert';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/app-error';

type RouteParams = {
  group: string
}

export function Players({ navigation }: RouteProps<'players'>) {
  const [players, setPlayers] = useState<string[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('Time A')

  const route = useRoute()
  const { group } = route.params as RouteParams

  function handleAddPlayer() {
    if (!newPlayerName.trim()) return Alert.alert('', 'Nome de jogador inválido')
    setPlayers(state => [...state, newPlayerName])
  }

  function handleCreateGroup() {
    try {
      const newGroup = {}
      // await groupCreate()
      navigation.navigate('groups')
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Novo Grupo', error.message)
      }
      Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo')
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} onChangeText={setNewPlayerName} />

        <ButtonIcon icon='add' onPress={handleAddPlayer} />
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
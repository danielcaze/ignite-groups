import { useCallback, useRef, useState } from 'react'
import { useFocusEffect, useRoute } from '@react-navigation/native';
import {
  ButtonIcon,
  Filter, Header,
  Highlight,
  Input,
  PlayerCard,
  ListEmpty,
  Button,
  Loading
} from "@components";
import { FlatList, View, Alert, Keyboard } from "react-native";
import { ButtonView, Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Group, Player, RouteProps } from 'src/types';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/app-error';
import { playerGetAllByGroup } from '@storage/player/playerGetAllByGroup';
import { playersGetUnfinished } from '@storage/player/playersGetUnfinished';
import { playersAddUnfinished } from '@storage/player/playersAddUnfinished';
import { groupRemove } from '@storage/group/groupRemove';

type RouteParams = {
  group: string
  isStored?: boolean
}

export function Players({ navigation }: RouteProps<'players'>) {
  const [isLoading, setIsLoading] = useState(true)
  const [players, setPlayers] = useState<Player[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('Time A')

  const TeamAPLayers = players.filter(player => player.team === 'Time A')
  const TeamBPLayers = players.filter(player => player.team === 'Time B')
  const selectedTeamShown = selectedTeam === 'Time A' ? TeamAPLayers : TeamBPLayers

  const route = useRoute()
  const { group, isStored } = route.params as RouteParams

  async function handleAddPlayer() {
    if (!newPlayerName.trim()) return Alert.alert('Novo Grupo', 'Nome de jogador inválido')
    try {
      const newPlayer: Player = {
        name: newPlayerName,
        id: String(players.length + 1),
        team: selectedTeam
      }
      if (isStored) {
        await playersAddUnfinished([...players, newPlayer])
      }
      setPlayers(state => [...state, newPlayer])
      setNewPlayerName('')
      Keyboard.dismiss()
    } catch (error) {
      console.error(error)
    }
  }

  async function handleCreateGroup() {
    try {
      const newGroup: Group = {
        id: new Date().toISOString(),
        title: group,
        players,
      }
      await groupCreate(newGroup)
      navigation.navigate('groups')
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Novo Grupo', error.message)
      }
      Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo')
    }
  }

  async function handleRemoveGroup() {
    try {
      await groupRemove(group)
      navigation.navigate('groups')
    } catch (error) {
      console.error(error)
    }
  }

  function handleRemovePlayer(deletedPlayerId: string) {
    return async () => {
      setPlayers(state => state.filter(player => player.id !== deletedPlayerId))
      if (isStored) {
        await playersAddUnfinished(players.filter(player => player.id !== deletedPlayerId))
      }
    }
  }

  async function getTeamMembers() {
    try {
      setIsLoading(true)
      if (isStored) {
        const storedPlayers = await playersGetUnfinished()
        setPlayers(storedPlayers)
        return
      }
      const players = await playerGetAllByGroup(group)
      setPlayers(players)

    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    getTeamMembers()
  }, []))

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} onChangeText={setNewPlayerName} value={newPlayerName} returnKeyType='done' />

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

      {
        isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={selectedTeamShown}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PlayerCard name={item.name} onRemove={handleRemovePlayer(item.id)} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time." />}
            contentContainerStyle={[
              { paddingBottom: 100 },
              players.length === 0 && { flex: 1 }
            ]}
          />
        )
      }

      <ButtonView>
        <Button title='Remover turma' type="SECONDARY" onPress={handleRemoveGroup} />
        <Button title='Salvar turma' onPress={handleCreateGroup} />
      </ButtonView>

    </Container>
  )
}
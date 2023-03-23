import {
  Button,
  Header,
  Highlight,
  Input
} from "@components";
import { Container, Content, Icon } from "./styles";
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { RouteProps } from 'src/types';
import { groupNameSave } from "@storage/group/groupUnfinished";
import { useFocusEffect } from "@react-navigation/native";
import { groupGetUnfinished } from "@storage/group/groupGetUnfinished";

export function NewGroup({ navigation }: RouteProps<'newGroup'>) {
  const [groupName, setGroupName] = useState('')

  async function handleNewPlayers() {
    if (!groupName.trim()) return Alert.alert('', 'Nome de grupo inválido.', [
      { text: 'Ok' }
    ])
    await groupNameSave(groupName)
    navigation.navigate('players', { group: groupName })
  }

  async function handleGetUnfinished() {
    const data = await groupGetUnfinished()
    setGroupName(data)
  }

  useFocusEffect(useCallback(() => {
    handleGetUnfinished()
  }, []))

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />
        <Input onChangeText={setGroupName} value={groupName} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNewPlayers} />
      </Content>
    </Container>
  )
}
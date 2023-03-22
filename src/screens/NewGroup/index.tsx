import {
  Button,
  Header,
  Highlight,
  Input
} from "@components";
import { Container, Content, Icon } from "./styles";
import { useState } from 'react';
import { Alert } from 'react-native';
import { RouteProps } from 'src/types';

export function NewGroup({ navigation }: RouteProps<'newGroup'>) {
  const [groupName, setGroupName] = useState('')

  function handleNewPlayers() {
    if (!groupName) return Alert.alert('', 'Nome de grupo inválido.', [
      { text: 'Ok' }
    ])
    navigation.navigate('players', { group: groupName })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />
        <Input />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNewPlayers} />
      </Content>
    </Container>
  )
}
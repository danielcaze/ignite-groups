import {
  Button,
  Header,
  Highlight,
  Input
} from "@components";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />
        <Input />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
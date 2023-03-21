import { GroupCard } from "@components/GroupCard";
import { Highlight } from "@components/Highlight";
import { Container, Heading } from "./styles";

export function Groups() {
  return (
    <Container>
      <Heading>Groups</Heading>
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <GroupCard title='s' />
    </Container>
  )
}
import { ComponentProps } from "react"
import { Container, Icon, Title } from "./styles"

type GroupCardProps = ComponentProps<typeof Container> & {
  title: string
}

export function GroupCard({ title, ...props }: GroupCardProps) {
  return (
    <Container {...props}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  )
}
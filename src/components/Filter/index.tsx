import { ComponentProps } from 'react'
import { Container, FilterStyleProps, Title } from "./styles";

type FilterProps = ComponentProps<typeof Container> & FilterStyleProps & {
  title: string
}

export function Filter({ title, isActive = false, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
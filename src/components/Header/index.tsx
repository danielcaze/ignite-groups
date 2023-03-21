import { BackButton, BackIcon, Container, Logo } from "./styles";

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {
        showBackButton && (
          <BackButton>
            <BackIcon />
          </BackButton>
        )
      }
      <Logo />
    </Container>
  )
}
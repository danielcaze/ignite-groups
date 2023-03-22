import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Logo } from "./styles";

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const { goBack } = useNavigation()

  return (
    <Container>
      {
        showBackButton && (
          <BackButton onPress={goBack}>
            <BackIcon />
          </BackButton>
        )
      }
      <Logo />
    </Container>
  )
}
import { ComponentProps } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

type ButtonIconProps = ComponentProps<typeof Container> & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...props }: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
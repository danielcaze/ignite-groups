import 'styled-components'
import defaultTheme from '../theme'

type themeType = typeof defaultTheme

declare module 'styled-components' {
  interface DefaultTheme extends themeType { }
}
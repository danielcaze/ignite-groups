import 'styled-components/native'
import defaultTheme from '../theme'

type themeType = typeof defaultTheme

declare module 'styled-components/native' {
  interface DefaultTheme extends themeType { }
}
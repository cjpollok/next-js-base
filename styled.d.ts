import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: {
        primary: string
      }
      white: string
    }
  }
}

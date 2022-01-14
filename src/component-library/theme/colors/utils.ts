import { getColor, mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const getBoxShadow = (colorName: string, props: StyleFunctionProps) => {
  const focusColor = getModeColor(colorName, props)

  return `0 0 0 2px ${focusColor}`
}

const getModeColor = (colorName: string, props: StyleFunctionProps) => {
  const themeColor = getColor(
    props.theme,
    mode(`light.${colorName}`, `dark.${colorName}`)(props) as string
  )
  return themeColor
}

export { getBoxShadow, getModeColor }

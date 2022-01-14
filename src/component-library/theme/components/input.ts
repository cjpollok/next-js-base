import { inputAnatomy } from '@chakra-ui/anatomy'
import { theme as defaultTheme } from '@chakra-ui/react'
import { PartsStyleFunction } from '@chakra-ui/theme-tools'

import { getBoxShadow, getModeColor } from '../colors'

const size = {
  borderRadius: '4px',
  height: '44px',
  fontSize: 'body',
  px: 3,
}

const baseStyle: PartsStyleFunction<typeof inputAnatomy> = (props) => {
  const textColor = getModeColor('text.body', props)

  return {
    field: {
      ...defaultTheme.components.Input.baseStyle.field,
      ...size,
      color: textColor,
      transition: 'none',
    },
    addon: {
      ...size,
    },
  }
}

const variantOutline: PartsStyleFunction<typeof inputAnatomy> = (props) => {
  const backgroundPrimary = getModeColor('background.primary', props)
  const boxShadow = getBoxShadow('brand.primaryFocus', props)
  const boxShadowErrorLight = getBoxShadow('status.errorLight', props)
  const borderColor = getModeColor('functional.graphic', props)
  const colorError = getModeColor('status.error', props)

  return {
    field: {
      backgroundColor: backgroundPrimary,
      border: '1px solid',
      borderColor: borderColor,
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _focus: {
        boxShadow,
        borderColor: getModeColor('brand.primary', props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },

      _invalid: {
        borderColor: colorError,
        _focus: {
          borderColor: colorError,
          boxShadow: boxShadowErrorLight,
        },
      },
    },
    addon: {
      border: '1px solid',
      borderColor: getModeColor('functional.graphic', props),
    },
  }
}

const variants = {
  outline: variantOutline,
}

const defaultProps = {
  variant: 'outline',
}

const Input = {
  baseStyle,
  defaultProps,
  variants,
}

export default Input

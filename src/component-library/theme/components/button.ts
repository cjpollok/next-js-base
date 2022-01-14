import { SystemStyleFunction, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { getBoxShadow, getModeColor } from '../colors'

const getDisabledStyles = (props: StyleFunctionProps) => {
  const textColor = getModeColor('text.inverted', props)
  const inactive = getModeColor('functional.inactive', props)

  return {
    bg: inactive,
    borderColor: inactive,
    color: textColor,
  }
}

const baseStyle: SystemStyleFunction = (props) => {
  const boxShadow = getBoxShadow('brand.primaryFocus', props)

  return {
    borderRadius: '4px',
    borderWidth: '2px',
    fontWeight: 'bold',
    minHeight: 12,
    minWidth: 12,
    paddingInline: 5,
    _active: {
      boxShadow,
      _disabled: {
        boxShadow: 'none',
      },
    },
    _disabled: {
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    _focus: {
      boxShadow,
    },
    _hover: {
      boxShadow,
      _disabled: {
        boxShadow: 'none',
      },
    },
    _loading: {
      _disabled: {
        boxShadow: 'none',
        textDecoration: 'none',
      },
    },
    _pressed: {
      boxShadow,
    },
  }
}

const variantPrimary: SystemStyleFunction = (props) => {
  const brandPrimary = getModeColor('brand.primary', props)
  const textColor = getModeColor('text.inverted', props)

  const defaultStyles = {
    bg: brandPrimary,
    borderColor: brandPrimary,
    color: textColor,
  }
  const disabledStyles = getDisabledStyles(props)

  return {
    ...defaultStyles,
    _disabled: disabledStyles,
    _hover: {
      _disabled: disabledStyles,
    },
    _loading: {
      _disabled: defaultStyles,
    },
  }
}

const variantPrimaryOutline: SystemStyleFunction = (props) => {
  const brandPrimary = getModeColor('brand.primary', props)
  const brandPrimaryFocus = getModeColor('brand.primaryFocus', props)
  const backgroundPrimary = getModeColor('background.primary', props)

  const defaultStyles = {
    bg: backgroundPrimary,
    borderColor: brandPrimaryFocus,
    color: brandPrimary,
  }
  const disabledStyles = getDisabledStyles(props)

  return {
    ...defaultStyles,
    _disabled: disabledStyles,
    _hover: {
      _disabled: disabledStyles,
    },
    _loading: {
      _disabled: defaultStyles,
    },
  }
}

const defaultProps = {
  variant: 'primary',
}

const variants = {
  primary: variantPrimary,
  primaryOutline: variantPrimaryOutline,
}

const Button = {
  baseStyle,
  defaultProps,
  variants,
}

export default Button

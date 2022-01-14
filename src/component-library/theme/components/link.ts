import { SystemStyleObject, SystemStyleFunction } from '@chakra-ui/theme-tools'

import { getModeColor } from '../colors'

const baseStyle: SystemStyleFunction = (props) => {
  const textColor = getModeColor('brand.primary', props)
  const outlineColor = getModeColor('brand.primaryFocus', props)

  return {
    color: textColor,
    cursor: 'pointer',
    display: 'inline-flex',
    textDecoration: 'underline',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      outline: `solid 2px ${outlineColor}`,
    },
  }
}

const variantInline: SystemStyleObject = {
  fontWeight: 'normal',
}

const variantStandalone: SystemStyleObject = {
  fontWeight: 'semibold',
  _focus: {
    outlineOffset: '0.5rem',
  },
}

const variants = {
  inline: variantInline,
  standalone: variantStandalone,
}

const defaultProps = {
  variant: 'inline',
}

const Link = {
  baseStyle,
  variants,
  defaultProps,
}

export default Link

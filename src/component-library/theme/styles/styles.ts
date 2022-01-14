import { Styles } from '@chakra-ui/theme-tools'

import { getModeColor } from '../colors'

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: getModeColor('background.primary', props),
      color: getModeColor('text.body', props),
      fontFamily: 'body',
      lineHeight: 'base',
      transitionDuration: 'normal',
      transitionProperty: 'background-color',
    },
    '*::placeholder': {
      color: getModeColor('functional.graphic', props),
    },
  }),
}

export default styles

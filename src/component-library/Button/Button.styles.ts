import styled from 'styled-components'

import { buttonReset } from '@/styles/common.styles'

export const StyledButton = styled.button`
  ${buttonReset}

  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.white};
`

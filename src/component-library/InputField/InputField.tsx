import { ReactNode } from 'react'
import {
  FormControl,
  FormControlProps as ChakraFormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react'

type InputFieldProps = Pick<
  ChakraFormControlProps,
  'id' | 'isDisabled' | 'isReadOnly' | 'isRequired' | 'label'
> & {
  children: ReactNode
  errorMessage?: string
  helpText?: ReactNode
}

const InputField = ({
  children,
  errorMessage,
  helpText,
  label,
  ...props
}: InputFieldProps) => (
  <FormControl isInvalid={Boolean(errorMessage)} {...props}>
    <FormLabel>{label}</FormLabel>
    {helpText && <FormHelperText>{helpText}</FormHelperText>}
    {children}
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export default InputField
export type { InputFieldProps }

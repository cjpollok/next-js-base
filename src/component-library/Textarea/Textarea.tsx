import React, { forwardRef } from 'react'
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react'

import InputField, { InputFieldProps } from '../InputField'

type TextareaProps = Pick<
  ChakraTextareaProps,
  'name' | 'onBlur' | 'onChange' | 'onFocus' | 'placeholder' | 'value'
> &
  Omit<InputFieldProps, 'children'>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, placeholder, onBlur, onChange, onFocus, value, ...props }, ref) => (
    <InputField {...props}>
      <ChakraTextarea
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={ref}
        value={value}
      />
    </InputField>
  )
)

Textarea.displayName = 'Textarea'

export default Textarea

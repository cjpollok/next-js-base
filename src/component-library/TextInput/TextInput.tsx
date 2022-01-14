import React, { forwardRef, ReactNode } from 'react'
import {
  Input as ChakraInput,
  InputGroup as ChackraInputGroup,
  InputProps as ChakraInputProps,
  InputLeftAddon as ChakraInputLeftAddon,
  InputLeftElement as ChakraInputLeftElement,
  InputRightAddon as ChakraInputRightAddon,
  InputRightElement as ChakraInputRightElement,
} from '@chakra-ui/react'

import InputField, { InputFieldProps } from '../InputField'

type TextInputProps = Pick<
  ChakraInputProps,
  'name' | 'onBlur' | 'onChange' | 'onFocus' | 'placeholder' | 'value'
> & {
  leftAddon?: ReactNode
  leftElement?: ReactNode
  rightAddon?: ReactNode
  rightElement?: ReactNode
  type?: 'email' | 'password' | 'tel' | 'text'
} & Omit<InputFieldProps, 'children'>

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      leftAddon,
      leftElement,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      rightAddon,
      rightElement,
      type = 'text',
      value,
      ...props
    },
    ref
  ) => {
    const input = (
      <ChakraInput
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
      />
    )

    if (!leftAddon && !leftElement && !rightAddon && !rightElement) {
      return <InputField {...props}>{input}</InputField>
    }

    return (
      <InputField {...props}>
        <ChackraInputGroup>
          {leftAddon && (
            <ChakraInputLeftAddon>{leftAddon}</ChakraInputLeftAddon>
          )}
          {leftElement && (
            <ChakraInputLeftElement>{leftElement}</ChakraInputLeftElement>
          )}
          {input}
          {rightElement && (
            <ChakraInputRightElement>{rightElement}</ChakraInputRightElement>
          )}
          {rightAddon && (
            <ChakraInputRightAddon>{rightAddon}</ChakraInputRightAddon>
          )}
        </ChackraInputGroup>
      </InputField>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput

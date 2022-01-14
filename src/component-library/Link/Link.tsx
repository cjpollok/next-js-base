import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

type LinkProps = Omit<ChakraLinkProps, 'variant'> & {
  /** @default "inline" */
  variant?: 'inline' | 'standalone'
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, isExternal, ...props }, ref) => {
    if (isExternal || !href) {
      return (
        <ChakraLink {...props} href={href} isExternal={isExternal} ref={ref} />
      )
    }

    return (
      <NextLink href={href} passHref>
        <ChakraLink {...props} ref={ref} />
      </NextLink>
    )
  }
)

Link.displayName = 'Link'

export default Link

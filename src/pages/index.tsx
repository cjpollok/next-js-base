import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Button,
  Heading,
  Link,
  Spinner,
  Text,
  Textarea,
  TextInput,
} from '@/component-library'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next JS Base</title>
      </Head>
      <main>
        <Heading as="h1">Heading</Heading>
        <Spinner />
        <Text>Text</Text>
        <Button>Button</Button>
        <Link href="#">Link</Link>
        <Textarea />
        <TextInput type="text" />
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'

import Button from '@/component-library/Button'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next JS Base</title>
      </Head>
      <main>
        <h1>Hello, World!</h1>
        <Button>Click me</Button>
      </main>
    </div>
  )
}

export default Home

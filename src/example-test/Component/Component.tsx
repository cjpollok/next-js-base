import { useState } from 'react'

import Button from '@/example-test/Button'

const Component = () => {
  const [isTextDisplayed, setIsTextDisplayed] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsTextDisplayed(true)} />
      {isTextDisplayed && <p>Hello, World!</p>}
    </div>
  )
}

export default Component

import React from 'react'

import { Container } from './src/components/wrapper'
import { Title } from './src/components/title'
import { Body } from './src/components/body'
import { CustomImage } from './src/components/CustomeImage'
import { RoundedButton } from './src/components/button'
const App = () => {
  return (
    <Container>
      <CustomImage 
        source={require('./src/assets/logo.png')}
      />
      <Title>Coding with Nguyen</Title>
      <Body>I am Nguyen Truong Khoi Nguyen. As you can see, there's not much here.Please 
        check out the other branches for code related</Body>
      <RoundedButton 
        title='HAHA'
      />
    </Container>
  )
}

export default App
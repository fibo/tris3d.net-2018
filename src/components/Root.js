import React, { Component } from 'react'

import {
  Container,
  Hero,
  Title
} from 'trunx'

export default class Root extends Component {
  render () {
    return (
      <Hero>
        <Hero.Body>
          <Container>
            <Title>Tris3d</Title>
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}

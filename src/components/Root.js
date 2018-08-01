import React, { Component } from 'react'

import {
  Container,
  Hero,
  Tag,
  Tags,
  Title
} from 'trunx'

export default class Root extends Component {
  componentDidMount () {
    this.props.fetchInfo()
  }

  render () {
    const {
      info
    } = this.props

    return (
      <Hero>
        <Hero.Body>
          <Container>
            <Title>Tris3d</Title>

            {info && (
              <Tags hasAddons>
                <Tag inInfo>users</Tag>
                <Tag>{info.numUsersOnline}</Tag>
              </Tags>
            )}
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}

import React, { Component } from 'react'

import {
  Container,
  Tag,
  Tags,
  Title
} from 'trunx'

export default class InfoTab extends Component {
  render () {
    const {
      numUsersOnline
    } = this.props

    return (
      <Container>
        <Title>Tris3d</Title>

        <Tags hasAddons>
          <Tag inInfo>users</Tag>
          <Tag>{numUsersOnline}</Tag>
        </Tags>
      </Container>
    )
  }
}

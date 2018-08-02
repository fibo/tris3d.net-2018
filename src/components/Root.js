import React, { Component } from 'react'
import bindme from 'bindme'

import {
  Container,
  Hero,
  Tabs,
  Tag,
  Tags,
  Title
} from 'trunx'

export default class Root extends Component {
  constructor (props) {
    bindme(super(props),
      'goToTab',
      'setCurrentTab'
    )

    this.state = {
      currentTab: 0
    }
  }

  componentDidMount () {
    this.props.fetchInfo()
  }

  goToTab (tabNum) {
    return () => {
      this.setCurrentTab(tabNum)
    }
  }
  render () {
    const {
      info
    } = this.props

    const {
      currentTab
    } = this.state

    return (
      <Hero isFullheight>
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

        <Hero.Foot>
          <Tabs.Nav isBoxed>
            <Tabs.Item
              isActive={currentTab === 0}
              onClick={this.goToTab(0)}
            >
              Info
            </Tabs.Item>

            <Tabs.Item
              isActive={currentTab === 1}
              onClick={this.goToTab(1)}
            >
              Settings
            </Tabs.Item>

            <Tabs.Item
              isActive={currentTab === 2}
              onClick={this.goToTab(2)}
            >
              Play
            </Tabs.Item>
          </Tabs.Nav>
        </Hero.Foot>
      </Hero>
    )
  }

  setCurrentTab (currentTab) {
    if (this.props.currentTab !== currentTab) {
      this.setState({ currentTab })
    }
  }
}

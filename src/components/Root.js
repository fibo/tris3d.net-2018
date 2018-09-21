import React, { Component } from 'react'
import bindme from 'bindme'

import {
  Hero,
  Tabs
} from 'trunx'

import InfoTab from './InfoTab'
import PlaygroundTab from './PlaygroundTab'
import SettingsTab from './SettingsTab'

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

  goToTab (tabNum) {
    return () => {
      this.setCurrentTab(tabNum)
    }
  }

  render () {
    const {
      currentTab
    } = this.state

    const infoTab = 0
    const settingsTab = 1
    const playgroundTab = 2

    return (
      <Hero isFullheight>
        <Hero.Body>
          {() => {
            switch (currentTab) {
              case infoTab: return <InfoTab {...this.props.infoTab} />

              case settingsTab: return <SettingsTab />

              case playgroundTab: return <PlaygroundTab />
            }
          }}
        </Hero.Body>

        <Hero.Foot>
          <Tabs.Nav isBoxed>
            <Tabs.Item
              isActive={currentTab === infoTab}
              onClick={this.goToTab(infoTab)}
            >
              Info
            </Tabs.Item>

            <Tabs.Item
              isActive={currentTab === settingsTab}
              onClick={this.goToTab(settingsTab)}
            >
              Settings
            </Tabs.Item>

            <Tabs.Item
              isActive={currentTab === playgroundTab}
              onClick={this.goToTab(playgroundTab)}
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

import React, { Component } from 'react'
import bindme from 'bindme'

import {
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
    const currentTabIsInfo = currentTab === infoTab

    const settingsTab = 1
    const currentTabIsSettings = currentTab === settingsTab

    const playgroundTab = 2
    const currentTabIsPlayground = currentTab === playgroundTab

    return (
      <div>
        <Tabs isCentered>
          <Tabs.Item
            isActive={currentTabIsInfo}
            onClick={this.goToTab(infoTab)}
          >
            Info
          </Tabs.Item>

          <Tabs.Item
            isActive={currentTabIsSettings}
            onClick={this.goToTab(settingsTab)}
          >
            Settings
          </Tabs.Item>

          <Tabs.Item
            isActive={currentTabIsPlayground}
            onClick={this.goToTab(playgroundTab)}
          >
            Play
          </Tabs.Item>
        </Tabs>

        <div>
          {currentTabIsInfo && <InfoTab {...this.props.infoTab} />}
          {currentTabIsSettings && <SettingsTab />}
          {currentTabIsPlayground && <PlaygroundTab />}
        </div>
      </div>
    )
  }

  setCurrentTab (currentTab) {
    if (this.props.currentTab !== currentTab) {
      this.setState({ currentTab })
    }
  }
}

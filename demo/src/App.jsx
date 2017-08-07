import React from 'react'

import {
  SiteWrap,
  Section,
  Tabs,
  BareList,
  InlineList,
  MatrixList,
  UniformedList
} from 'nebula-react'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <h1>Nebula React</h1>
        <h2>Lists</h2>
        <Tabs.Wrapper>
          <Tabs.TabList>
            <Tabs.Tab>Bare list</Tabs.Tab>
            <Tabs.Tab>Inline list</Tabs.Tab>
            <Tabs.Tab>Matrix list</Tabs.Tab>
            <Tabs.Tab>Uniformed list</Tabs.Tab>
          </Tabs.TabList>
          <Tabs.Panels>
            <Tabs.Panel>
              <BareList.Wrapper spacing="md">
                <BareList.Item>Help</BareList.Item>
                <BareList.Item>Me</BareList.Item>
              </BareList.Wrapper>
            </Tabs.Panel>
            <Tabs.Panel>
              <InlineList.Wrapper spacing="md@md">
                <InlineList.Item>Help</InlineList.Item>
                <InlineList.Item>Me</InlineList.Item>
              </InlineList.Wrapper>
            </Tabs.Panel>
            <Tabs.Panel>
              <MatrixList.Wrapper spacing="md">
                <MatrixList.Item>Help</MatrixList.Item>
                <MatrixList.Item>Me</MatrixList.Item>
              </MatrixList.Wrapper>
            </Tabs.Panel>
            <Tabs.Panel>
              <UniformedList.Wrapper breakpoint="md">
                <UniformedList.Item>Help</UniformedList.Item>
                <UniformedList.Item>Me</UniformedList.Item>
              </UniformedList.Wrapper>
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs.Wrapper>
      </SiteWrap>
    </Section>
  </div>
)

export default App
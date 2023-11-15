import { Button, ConfigProvider, Drawer, Layout } from 'antd'
import React, { useState } from 'react'
import themeConfig from '~/theme/antd-theme.config'
import Footer from './Footer'
import Header from './Header'
import SideNav from './SideNav'

const { Sider, Header: AntHeader, Content } = Layout

const Main: React.FC = () => {
  const [breakpoint, setBreakpoint] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [keys, setkeys] = useState<string[]>(['sub1'])

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className='w-full bg-background'>
        <Drawer
          title={false}
          placement='left'
          closable={true}
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
          width={250}
        >
          <Layout
            className='w-full'
            style={{
              width: '100%',
              padding: '0px',
              margin: '0px'
            }}
          >
            <Sider trigger={null} className=''>
              <SideNav keys={keys} setKeys={setkeys} />
            </Sider>
          </Layout>
        </Drawer>
        <Sider
          breakpoint='lg'
          collapsedWidth={0}
          onBreakpoint={(state) => {
            setBreakpoint(state)
            setCollapsed(state)
          }}
          collapsible
          collapsed={collapsed}
          trigger={null}
          width={250}
          className=''
        >
          <SideNav keys={keys} setKeys={setkeys} />
        </Sider>
        <Layout className=''>
          <AntHeader className='h-fit p-0'>
            <Header
              collapsed={collapsed}
              onMenuClick={() => {
                if (breakpoint) {
                  console.log('Breakpoint enabled')
                  setOpenDrawer(true)
                } else {
                  console.log('Breakpoint disabled')
                  setCollapsed(!collapsed)
                }
              }}
            />
          </AntHeader>
          <Content className=''>
            <div style={{ padding: 24, textAlign: 'center' }}>
              <p>long content</p>
              <Button type='text'>Hello</Button>
              {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ))
              }
            </div>
          </Content>
          <Footer className=''>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default Main

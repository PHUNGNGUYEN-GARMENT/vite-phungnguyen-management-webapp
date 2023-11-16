import { ConfigProvider, Drawer, Layout } from 'antd'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import themeConfig from '~/theme/antd-theme.config'
import Footer from './Footer'
import Header from './Header'
import SideNav from './SideNav'

const { Sider, Header: AntHeader, Content } = Layout

const Main: React.FC = () => {
  const [breakpoint, setBreakpoint] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

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
              <SideNav />
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
          <SideNav />
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
            <Outlet />
          </Content>
          <Footer className=''>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default Main

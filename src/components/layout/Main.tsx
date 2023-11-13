import { Layout } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from '~/lib/cn'
import Header from './Header'
import SideNav from './SideNav'

const { Footer, Content } = Layout

const Main = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout hasSider>
      <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        className={cn('duration-300', {
          'ml-[200px]': !collapsed
        })}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} className='p-0' />
        <Content className='min-h-screen'>{<Outlet />}</Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Main

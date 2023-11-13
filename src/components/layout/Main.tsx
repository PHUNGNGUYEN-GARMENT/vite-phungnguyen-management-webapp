import { Layout } from 'antd'
import { useState } from 'react'
import { cn } from '~/lib/cn'

const { Footer, Content } = Layout

const Main = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout hasSider>
      {/* <SideNav collapsed={collapsed} /> */}
      <Layout
        className={cn('duration-300', {
          'ml-[80px]': collapsed,
          'ml-[200px]': !collapsed
        })}
      >
        {/* <Header collapsed={collapsed} setCollapsed={setCollapsed} style={{ padding: 0 }} /> */}
        <Content style={{ overflow: 'initial' }}></Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Main

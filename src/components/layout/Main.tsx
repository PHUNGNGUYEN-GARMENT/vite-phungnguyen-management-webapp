import { useState } from 'react'

import { Button } from 'antd'
import React from 'react'
import Header from './Header'
import SideNav from './SideNav'
import Footer from './Footer'

const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='bg-background'>
      <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className='ml-[200px]'>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className='bg-orange-500'>
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
        </main>
        <Footer className=''>Ant Design ©2023 Created by Ant UED</Footer>
      </div>
    </div>
  )
}

export default Main

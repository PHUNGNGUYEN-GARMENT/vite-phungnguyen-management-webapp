import { Button } from 'antd'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideNav from './SideNav'

const Main: React.FC = () => {
  return (
    <div className='bg-background'>
      <SideNav />
      <div className='ml-[72px] lg:ml-[250px]'>
        <Header />
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

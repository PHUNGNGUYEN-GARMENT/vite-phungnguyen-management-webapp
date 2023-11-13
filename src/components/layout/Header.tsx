/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Button, Input, Space } from 'antd'
import { AlignJustify, AlignLeft, Search } from 'lucide-react'
import React, { forwardRef } from 'react'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ collapsed, setCollapsed }) => {
  return (
    <Space direction='horizontal' className='h-14 bg-white'>
      <Button
        type='text'
        icon={collapsed ? <AlignLeft /> : <AlignJustify />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 24,
          height: 24
        }}
      />
      <Input className='border-none bg-[#f9fafb]' size='large' placeholder='Type here...' prefix={<Search />} />
    </Space>
  )
})

export default Header

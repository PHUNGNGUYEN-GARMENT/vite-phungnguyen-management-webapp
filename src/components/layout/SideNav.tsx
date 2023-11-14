// import { useState } from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import React from 'react'
// import { useLocation } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import { cn } from '~/lib/utils'

interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  keys: string[]
  setKeys: (keys: string[]) => void
}

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

// eslint-disable-next-line no-empty-pattern
const SideNav = ({ keys, setKeys }: SideNavProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { pathname } = useLocation()
  // const {
  //   token: { colorBgContainer }
  // } = theme.useToken()

  return (
    <div className={cn('bg-white')}>
      <div className='relative flex justify-center py-5'>
        <img src={logo} alt='logo' className='h-10 w-10 object-contain lg:h-20 lg:w-20' />
      </div>
      {/* <Menu>
        {routes.map((route) => {
          // const isActive = pathname === route.path
          return (
            <Menu.Item key={route.key} className='' icon={<route.icon size={20} className={cn('bg-primary')} />}>
              <Link to={route.path} className=''>
                <span>{route.name}</span>
              </Link>
            </Menu.Item>
          )
        })}
      </Menu> */}
      <Menu
        mode='inline'
        defaultSelectedKeys={keys}
        defaultOpenKeys={keys}
        selectedKeys={keys}
        onSelect={(selectedKeys) => setKeys(selectedKeys.selectedKeys)}
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
      />
    </div>
  )
}
export default SideNav

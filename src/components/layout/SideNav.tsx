// import { useState } from "react";
import { Menu, MenuProps } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import routes from '~/constants/route'
import { cn } from '~/lib/utils'

interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  keys: string[]
  setKeys: (keys: string[]) => void
}

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[] | null
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />)
// ]

const SideItem = (path: string, name: string) => {
  return (
    <Link to={path} className=''>
      <span>{name}</span>
    </Link>
  )
}

const items: MenuItem[] = routes.map((route) => {
  return getItem(
    SideItem(route.path, route.name),
    route.key,
    <route.icon />,
    route.childs
      ? route.childs.map((child) => {
          return getItem(SideItem(child.path, child.name), child.key)
        })
      : null
  )
})

// eslint-disable-next-line no-empty-pattern
const SideNav = ({ keys, setKeys }: SideNavProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pathname } = useLocation()
  // const {
  //   token: { colorBgContainer }
  // } = theme.useToken()

  // useEffect(() => {
  //   console.log(keys)
  // }, [keys])

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
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        // defaultSelectedKeys={keys}
        onSelect={(info) => setKeys(info.selectedKeys)}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </div>
  )
}
export default SideNav

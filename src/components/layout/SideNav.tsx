// import { useState } from "react";
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import routes from '~/constants/route'

interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  setCollapsed: (state: boolean) => void
}

const SideNav = ({ collapsed, setCollapsed }: SideNavProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pathname } = useLocation()

  const getKeyFromPath = (path: string): number => {
    const route = routes.find((route) => route.path === path)
    if (route) {
      return route.key
    }
    return -1
  }

  return (
    <Sider
      // breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={setCollapsed}
      trigger={null}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
      collapsible
      collapsed={collapsed}
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        top: 0,
        overflow: 'auto',
        background: '#ffffff'
      }}
      className='shadow-sm'
    >
      <div className='' />
      <Menu mode='inline' className='' defaultSelectedKeys={[`${getKeyFromPath(pathname)}`]}>
        {routes.map((route) => {
          return (
            <Menu.Item
              key={route.key}
              icon={<route.icon />}
              className='before:bg-black before:bottom-0 before:left-0 before:top-0
             before:w-1 before:absolute rounded-full'
            >
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
}
export default SideNav

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
  return (
    <Sider
      breakpoint='lg'
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
        background: '#fff'
      }}
    >
      <div className='' />
      <Menu mode='inline' defaultSelectedKeys={['4']}>
        {routes.map((route, index) => {
          return (
            <Menu.Item key={index} icon={<route.icon />}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
}
export default SideNav

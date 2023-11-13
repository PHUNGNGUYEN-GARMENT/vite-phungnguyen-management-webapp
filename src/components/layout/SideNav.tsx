// import { useState } from "react";
import { BarChartOutlined, FireOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { forwardRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
}

interface ItemProps {
  icon: React.ReactNode
  title: string
  path: string
}

const SideNav = forwardRef<HTMLElement, SideNavProps>(({ collapsed }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pathname } = useLocation()

  const items: ItemProps[] = [
    { icon: <FireOutlined />, title: 'Dashboard', path: '/dashboard' },
    { icon: <VideoCameraOutlined />, title: 'E-Commerce', path: '/e-commerce' },
    { icon: <UploadOutlined />, title: 'Calendar', path: '/calendar' },
    { icon: <BarChartOutlined />, title: 'Mail', path: '/mail' }
  ]

  return (
    <Sider
      breakpoint='lg'
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      trigger={null}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }}
    >
      <div className='' />
      <Menu mode='inline' defaultSelectedKeys={['4']}>
        {items.map((item, index) => {
          return (
            <Menu.Item key={index} icon={item.icon}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
})

export default SideNav

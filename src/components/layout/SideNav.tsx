// import { useState } from "react";
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import routes from '~/constants/route'
import { cn } from '~/lib/cn'

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
      breakpoint='lg'
      width={250}
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
        background: '#f9fafb'
      }}
      className='shadow-sm'
    >
      <div className='flex justify-center m-5'>
        <img src={logo} alt='logo' className='object-contain h-14 w-auto' />
      </div>
      <Menu mode='inline' defaultSelectedKeys={[`${getKeyFromPath(pathname)}`]}>
        {routes.map((route) => {
          return (
            <Menu.Item
              key={route.key}
              icon={<route.icon />}
              style={{
                borderRadius: '0px'
              }}
              className={cn('select-none font-semibold', {
                'before:bg-[#f07c00] before:h-full before:left-0 before:w-1 before:absolute before:rounded-tr-full before:rounded-br-full':
                  getKeyFromPath(pathname) === route.key
              })}
            >
              <Link className='transition-none' to={route.path}>
                {route.name}
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
}
export default SideNav

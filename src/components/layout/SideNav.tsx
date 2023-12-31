import { Menu, MenuProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import { routes } from '~/constants/route.constant'
import { cn } from '~/lib/utils'

export interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  onSelectedItem?: () => void
}

export type MenuItem = Required<MenuProps>['items'][number]

export function getItem(
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

export const SideItem = (path: string, name: string) => {
  return (
    <Link to={path}>
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
const SideNav = ({ onSelectedItem, ...props }: SideNavProps) => {
  const { pathname } = useLocation()
  const [keys, setKeys] = useState<string>(pathname)

  useEffect(() => {
    setKeys(pathname)
  }, [])

  const getSubKeysFromPath = (path: string): string[] => {
    for (const route of routes) {
      if (route.childs) {
        for (const child of route.childs) {
          if (child.path === path) {
            return [`${route.key}`]
          }
        }
      }
    }
    return ['']
  }

  return (
    <div {...props} className={cn('bg-white', props.className)}>
      <Link onClick={() => setKeys(routes[0].path)} to={routes[0].path} className='relative flex justify-center py-5'>
        <img src={logo} alt='logo' className='h-10 w-10 object-contain lg:h-20 lg:w-20' />
      </Link>
      <Menu
        mode='inline'
        // defaultSelectedKeys={[pathname]}
        defaultOpenKeys={getSubKeysFromPath(pathname)}
        selectedKeys={[keys]}
        activeKey={keys}
        selectable
        onSelect={(info) => {
          setKeys(info.selectedKeys[0])
          onSelectedItem?.()
        }}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </div>
  )
}
export default SideNav

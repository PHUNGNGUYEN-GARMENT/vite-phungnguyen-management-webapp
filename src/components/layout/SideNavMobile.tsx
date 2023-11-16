import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import { routesMobile } from '~/constants/route.constant'
import { cn } from '~/lib/utils'
import { MenuItem, SideItem, SideNavProps, getItem } from './SideNav'

const items: MenuItem[] = routesMobile.map((route) => {
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
const SideNavMobile = ({ onSelectedItem, ...props }: SideNavProps) => {
  const { pathname } = useLocation()
  const [keys, setKeys] = useState<string>(pathname)

  useEffect(() => {
    setKeys(pathname)
  }, [])

  const getSubKeysFromPath = (path: string): string[] => {
    for (const route of routesMobile) {
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
      <Link
        onClick={() => setKeys(routesMobile[0].path)}
        to={routesMobile[0].path}
        className='relative flex justify-center py-5'
      >
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
export default SideNavMobile

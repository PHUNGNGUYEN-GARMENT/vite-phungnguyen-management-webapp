import { Button } from 'antd'
import { MenuIcon } from 'lucide-react'
import React from 'react'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  return (
    <header className='bg-blue-400'>
      <Button
        type='text'
        icon={collapsed ? <MenuIcon /> : <MenuIcon />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64
        }}
      />
    </header>
  )
}

export default Header

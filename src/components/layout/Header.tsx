import React from 'react'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

// eslint-disable-next-line no-empty-pattern
const Header = ({}: HeaderProps) => {
  return <header className='h-[72px] bg-blue-400'></header>
}

export default Header

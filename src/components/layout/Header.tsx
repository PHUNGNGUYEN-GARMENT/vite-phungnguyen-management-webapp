import { Avatar, Badge, Button } from 'antd'
import { BellRing, Search } from 'lucide-react'
import React from 'react'
import { cn } from '~/lib/utils'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

// eslint-disable-next-line no-empty-pattern
const Header = ({}: HeaderProps) => {
  const url = 'https://www.elle.vn/wp-content/uploads/2014/07/08/Justin-Bieber-0.jpg'

  return (
    <header className='flex h-[56px] flex-row items-center justify-between gap-5 bg-card px-2'>
      <button
        placeholder='Type here...'
        className={cn(
          'relative inline-flex h-9 w-full flex-row items-center justify-start gap-2 whitespace-nowrap rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted shadow-sm transition-colors sm:pr-12 md:w-40 lg:w-64',
          'hover:bg-accent hover:text-accent-foreground',
          'focus-visible:outline focus-visible:ring-1 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-50 disabled:ring-1',
          'border border-input'
        )}
      >
        <span role='img' className='inline-flex'>
          <Search size={16} />
        </span>
        <span className='inline-flex'>Type here...</span>
      </button>
      <div className='relative flex h-full w-fit flex-row items-center justify-center gap-5'>
        <Badge count={3}>
          <Button type='default' className='rounded-full px-2 py-2'>
            <BellRing size={16} />
          </Button>
        </Badge>
        <Button className='relative m-0 flex h-fit w-fit items-center justify-center rounded-full p-0' type='default'>
          <Avatar size='large' className='' src={<img src={url} alt='avatar' />} />
        </Button>
      </div>
    </header>
  )
}

export default Header

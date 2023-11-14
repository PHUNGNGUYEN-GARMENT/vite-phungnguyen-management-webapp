import { Search } from 'lucide-react'
import React from 'react'
import { cn } from '~/lib/cn'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

// eslint-disable-next-line no-empty-pattern
const Header = ({}: HeaderProps) => {
  return (
    <header className='flex h-[56px] flex-col bg-card'>
      <div className=''>
        <button
          placeholder='Type here...'
          className={cn(
            'relative inline-flex h-9 w-full flex-row items-center justify-start gap-2 whitespace-nowrap rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors sm:pr-12 md:w-40 lg:w-64',
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
      </div>
    </header>
  )
}

export default Header

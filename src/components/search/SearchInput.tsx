import { Input, Modal } from 'antd'
import { SearchIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import routes from '~/constants/route'
import { cn } from '~/lib/utils'
import SearchItem from './SearchItem'

interface SearchInputProps extends React.HTMLAttributes<HTMLInputElement> {}

// eslint-disable-next-line no-empty-pattern
function SearchInput({}: SearchInputProps) {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    console.log(searchValue)
  }, [searchValue])

  return (
    <>
      <button
        placeholder='Type here...'
        className={cn(
          'relative inline-flex h-9 w-full flex-row items-center justify-start gap-2 whitespace-nowrap rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted shadow-sm transition-colors sm:pr-12 md:w-40 lg:w-64',
          'hover:bg-accent hover:text-accent-foreground',
          'focus-visible:outline focus-visible:ring-1 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-50 disabled:ring-1',
          'border border-input'
        )}
        onClick={() => setOpen(true)}
      >
        <span role='img' className='inline-flex'>
          <SearchIcon size={16} />
        </span>
        <span className='inline-flex'>Type here...</span>
      </button>
      <Modal
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        closeIcon={false}
        closable={false}
      >
        <div className='flex flex-col'>
          <Input
            allowClear
            autoFocus={true}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search here'
            className=''
          />
          <div>
            <ul className='flex flex-col' dir='ltr'>
              {routes.map((item) => {
                return (
                  <li key={item.key}>
                    <SearchItem title={item.name} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SearchInput

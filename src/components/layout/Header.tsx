import { Avatar, Badge, Button } from 'antd'
import { BellRing } from 'lucide-react'
import React from 'react'
import SearchInput from '../search/SearchInput'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

// eslint-disable-next-line no-empty-pattern
const Header = ({}: HeaderProps) => {
  const url = 'https://www.elle.vn/wp-content/uploads/2014/07/08/Justin-Bieber-0.jpg'

  return (
    <>
      <header className='flex h-[56px] flex-row items-center justify-between gap-5 bg-card px-2'>
        <SearchInput />
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
    </>
  )
}

export default Header

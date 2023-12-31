import { Avatar, Badge, Button, Modal, Space } from 'antd'
import { BellRing, ChevronDown, Menu } from 'lucide-react'
import React, { useState } from 'react'
import SearchInput from '../search/SearchInput'
import UserDialog from '../user/user-dialog'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  onMenuClick: (event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
}

// eslint-disable-next-line no-empty-pattern
const Header = ({ onMenuClick }: HeaderProps) => {
  const url = 'https://www.elle.vn/wp-content/uploads/2014/07/08/Justin-Bieber-0.jpg'
  const [openUserInfo, setOpenUserInfo] = useState(false)

  return (
    <>
      <div className='flex h-[56px] flex-row items-center justify-between gap-5 bg-card px-5'>
        <div className='flex flex-row items-center justify-start gap-5'>
          <button className='flex-shrink-0' onClick={onMenuClick}>
            <Menu size={20} />
          </button>
          <SearchInput />
        </div>
        <div className='relative flex h-full w-fit flex-row items-center justify-center gap-5'>
          <Button type='default' className='flex items-center justify-center' shape='circle'>
            <Badge size='small' count={3}>
              <BellRing size={16} />
            </Badge>
          </Button>
          <Space className=''>
            <Button onClick={() => setOpenUserInfo(true)} className='m-0 h-fit w-fit p-0' shape='circle' type='default'>
              <span role='img'>
                <Avatar size='large' src={<img src={url} alt='avatar' />} />
              </span>
            </Button>
            <button className='hidden md:flex' onClick={() => setOpenUserInfo(true)}>
              <Space size='small'>
                <span>
                  <p>Justin Bieber</p>
                </span>
                <span>
                  <ChevronDown />
                </span>
              </Space>
            </button>
          </Space>
        </div>
      </div>
      <Modal
        open={openUserInfo}
        onOk={() => setOpenUserInfo(false)}
        onCancel={() => setOpenUserInfo(false)}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
      >
        <UserDialog
          avatar={url}
          fullName={'Nguyễn Hữu Hậu'}
          email={'huuhau.hh47@gmail.com'}
          phone={'012345678'}
          position={'IT'}
          gender={false}
        />
      </Modal>
    </>
  )
}

export default Header

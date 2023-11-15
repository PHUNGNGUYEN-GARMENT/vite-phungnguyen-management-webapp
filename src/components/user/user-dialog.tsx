import { Avatar, Flex, Space, Switch, Typography } from 'antd'
import { useState } from 'react'
import InputView from '../ui/input-view'

interface UserDialogProps {
  avatar: string
  fullName: string
  email: string
  phone: string
  position: string
  gender: boolean
}

function UserDialog(props: UserDialogProps) {
  const [isMe, setIsMe] = useState(false)
  return (
    <div className='flex w-full flex-col gap-5'>
      <div className='flex w-full flex-row items-stretch gap-3'>
        <Avatar
          className='h-28 w-28 border-none object-contain shadow-none sm:h-32 sm:w-32 md:h-36 md:w-36'
          shape='square'
          icon={<img src={props.avatar} alt='avatar' />}
        />
        <div className='flex flex-col justify-between gap-2'>
          <div className='flex h-fit w-fit flex-col items-start justify-start'>
            <Typography.Title level={5}>Bộ phận:</Typography.Title>
            <Typography.Text strong code className=''>
              {props.position}asdksajbdjahsdbhs
            </Typography.Text>
          </div>
          <div className='flex flex-row gap-2'>
            <Typography.Title level={5}>Is me?</Typography.Title>
            <Switch defaultChecked={isMe} onClick={(checked) => setIsMe(checked)} />
          </div>
        </div>
      </div>
      <Space direction='vertical' size='middle'>
        <Flex vertical>
          <Typography.Title type='secondary' level={5}>
            Họ tên:
          </Typography.Title>
          {/* <Input value={props.firstName + ' ' + props.lastName} disabled /> */}
          <InputView text={props.fullName} className='' />
        </Flex>
        <Flex vertical>
          <Typography.Title type='secondary' level={5}>
            Email:
          </Typography.Title>
          {/* <Input value={props.email} disabled /> */}
          <InputView text={props.email} className='' />
        </Flex>
        <Flex vertical>
          <Typography.Title type='secondary' level={5}>
            Phone:
          </Typography.Title>
          {/* <Input value={props.phone} disabled /> */}
          <InputView text={props.phone} className='' />
        </Flex>
      </Space>
    </div>
  )
}

export default UserDialog

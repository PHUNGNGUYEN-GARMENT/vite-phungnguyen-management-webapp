import { Avatar, Flex, Input, Space, Typography } from 'antd'

interface UserDialogProps {
  avatar: string
  firstName: string
  lastName: string
  email: string
  position: string
  gender: boolean
}

function UserDialog(props: UserDialogProps) {
  return (
    <Space align='center' direction='vertical' className='w-full'>
      <Flex>
        <Avatar
          className='border-none shadow-none'
          size={{ xs: 120, sm: 140, md: 180, lg: 200, xl: 230, xxl: 260 }}
          shape='square'
          icon={<img src={props.avatar} alt='avatar' />}
        />
        <Typography.Text type='secondary'>asdbsa</Typography.Text>
      </Flex>
      <Space direction='vertical' size='middle'>
        <Flex gap={10}>
          <Flex vertical className=''>
            <Typography.Title level={5}>Fist name:</Typography.Title>
            <Input value={props.firstName} disabled />
          </Flex>
          <Flex vertical>
            <Typography.Title level={5}>Last name:</Typography.Title>
            <Input value={props.lastName} disabled />
          </Flex>
        </Flex>
        <Flex vertical>
          <Typography.Title level={5}>Email:</Typography.Title>
          <Input value={props.email} disabled />
        </Flex>
      </Space>
    </Space>
  )
}

export default UserDialog

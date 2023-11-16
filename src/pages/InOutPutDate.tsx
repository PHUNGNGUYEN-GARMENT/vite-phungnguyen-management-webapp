import { Table, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { productList } from '~/helper/fake-api'
import { IProductList } from '~/interface'
import { cn } from '~/lib/utils'

interface InOutputDateProps extends React.HTMLAttributes<HTMLElement> {}

export interface IInOutputDate {
  productCode: string
  dateInputNPL: string
  dateOutputFCR: string
  importedDate: string
  importedLot: string
}

const columns: ColumnsType<IProductList> = [
  {
    title: 'Mã hàng',
    dataIndex: 'productCode',
    key: 'productCode',
    render: (self) => <Typography.Text className='font-semibold'>{self}</Typography.Text>
  },
  {
    title: 'Ngày nhập NPL',
    key: 'dateInputNPL',
    dataIndex: 'dateInputNPL'
  },
  {
    title: 'Ngày xuất FCR',
    key: 'dateOutputFCR',
    dataIndex: 'dateOutputFCR'
  },
  {
    title: 'Nhập khẩu',
    children: [
      {
        title: 'Ngày nhập',
        key: 'importedDate',
        dataIndex: 'importedDate'
      },
      {
        title: 'Lô nhập',
        key: 'importedLot',
        dataIndex: 'importedLot'
      }
    ]
  }
]

// eslint-disable-next-line no-empty-pattern
function InOutputDate(props: InOutputDateProps) {
  return (
    <div {...props} className={cn('', props.className)}>
      <Table
        columns={columns}
        dataSource={productList.map((item) => {
          return { ...item, key: item.productID }
        })}
      />
    </div>
  )
}

export default InOutputDate

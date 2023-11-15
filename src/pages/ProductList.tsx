import { Table, Tag, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { productList } from '~/helper/fake-api'
import { IColor, IProductList } from '~/interface'
import { cn } from '~/lib/utils'

interface ProductListProps extends React.HTMLAttributes<HTMLElement> {}

const columns: ColumnsType<IProductList> = [
  {
    title: 'Mã hàng',
    dataIndex: 'productCode',
    key: 'productCode',
    render: (self) => <Typography.Text className='font-semibold'>{self}</Typography.Text>
  },
  {
    title: 'Màu',
    dataIndex: 'colors',
    key: 'colors',
    render: (colors: IColor[]) => (
      <>
        {colors.map((color) => {
          return (
            <Tag color={color.hexColor} key={color.colorID}>
              {color.nameColor}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: 'Nhóm',
    dataIndex: 'group',
    key: 'group',
    render: (item) => <Tag color='default'>{item}</Tag>
  },
  {
    title: 'Số lượng PO',
    key: 'quantityPO',
    dataIndex: 'quantityPO'
  },
  {
    title: 'Ngày nhập NPL',
    key: 'dateInputNPL',
    dataIndex: 'dateInputNPL',
    responsive: ['md']
  },
  {
    title: 'Ngày xuất FCR',
    key: 'dateOutputFCR',
    dataIndex: 'dateOutputFCR',
    responsive: ['md']
  },
  {
    title: 'Nơi in / thêu',
    key: 'placePrintIn',
    dataIndex: 'placePrintIn',
    responsive: ['md']
  }
]

// eslint-disable-next-line no-empty-pattern
function ProductList(props: ProductListProps) {
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

export default ProductList

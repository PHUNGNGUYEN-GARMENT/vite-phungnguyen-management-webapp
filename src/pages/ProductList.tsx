import { Tag, Typography } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { productList } from '~/helper/fake-api'
import { IProductList } from '~/interface'
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
    render: (_, { colors }) => (
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
    dataIndex: 'dateInputNPL'
  },
  {
    title: 'Ngày xuất FCR',
    key: 'dateOutputFCR',
    dataIndex: 'dateOutputFCR'
  },
  {
    title: 'Nơi in / thêu',
    key: 'placePrintIn',
    dataIndex: 'placePrintIn'
  }
]

// eslint-disable-next-line no-empty-pattern
function ProductList(props: ProductListProps) {
  useEffect(() => {
    console.log(isMobile)
  }, [])

  return (
    <div {...props} className={cn('', props.className)}>
      <Table columns={columns} dataSource={productList} />
    </div>
  )
}

export default ProductList

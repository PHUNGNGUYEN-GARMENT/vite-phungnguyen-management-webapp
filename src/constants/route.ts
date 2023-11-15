import {
  Aperture,
  ClipboardList,
  GroupIcon,
  Import,
  LayoutDashboard,
  PackageSearch,
  Palette,
  PersonStanding,
  Printer,
  Scissors,
  StickyNote
} from 'lucide-react'
import { Outlet } from 'react-router-dom'
import Accessory from '~/pages/Accessory'
import Color from '~/pages/Color'
import CuttingGroup from '~/pages/CuttingGroup'
import Dashboard from '~/pages/Dashboard'
import EmbroideredDelivery from '~/pages/EmbroideredDelivery'
import Group from '~/pages/Group'
import Importation from '~/pages/Imnportation'
import Notion from '~/pages/Notion'
import PrintIn from '~/pages/Printin'
import ProductList from '~/pages/ProductList'
import Sewing from '~/pages/Sewing'

const routes = [
  { key: 0, path: '', name: 'Tổng quan', component: Dashboard, icon: LayoutDashboard },
  {
    key: 1,
    path: '',
    name: 'Thông tin mã hàng',
    component: Outlet,
    icon: PackageSearch,
    childs: [
      {
        key: 2,
        path: 'product-list',
        name: 'Danh sách mã hàng',
        component: ProductList,
        icon: ClipboardList
      },
      {
        key: 3,
        path: 'importation',
        name: 'Nhập khẩu',
        component: Importation,
        icon: Import
      },
      {
        key: 4,
        path: 'sewings',
        name: 'May mẫu',
        component: Sewing,
        icon: Aperture
      },
      {
        key: 5,
        path: 'accessories',
        name: 'Phụ liệu',
        component: Accessory,
        icon: PersonStanding
      },
      {
        key: 6,
        path: 'cutting',
        name: 'Tổ cắt',
        component: CuttingGroup,
        icon: Scissors
      },
      {
        key: 7,
        path: 'embroidered-delivery',
        name: 'Chuyền may',
        component: EmbroideredDelivery,
        icon: Import
      }
    ]
  },
  { key: 8, path: 'colors', name: 'Danh sách màu', component: Color, icon: Palette },
  { key: 9, path: 'groups', name: 'Danh sách nhóm', component: Group, icon: GroupIcon },
  { key: 10, path: 'print-in', name: 'Danh sách in - thêu', component: PrintIn, icon: Printer },
  { key: 11, path: 'notion', name: 'Ghi chú phụ liệu', component: Notion, icon: StickyNote }
]

export default routes

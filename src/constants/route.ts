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
import PrintIn from '~/pages/PrintIn'
import ProductList from '~/pages/ProductList'
import Sewing from '~/pages/Sewing'

const routes = [
  { key: '0', path: 'dashboard', name: 'Tổng quan', component: Dashboard, icon: LayoutDashboard },
  {
    key: 'sub1',
    path: 'product',
    name: 'Thông tin mã hàng',
    component: Outlet,
    icon: PackageSearch,
    childs: [
      {
        key: '1',
        path: '/product/product-list',
        name: 'Danh sách mã hàng',
        component: ProductList,
        icon: ClipboardList
      },
      {
        key: '2',
        path: '/product/importation',
        name: 'Nhập khẩu',
        component: Importation,
        icon: Import
      },
      {
        key: '3',
        path: '/product/sewings',
        name: 'May mẫu',
        component: Sewing,
        icon: Aperture
      },
      {
        key: '4',
        path: '/product/accessories',
        name: 'Phụ liệu',
        component: Accessory,
        icon: PersonStanding
      },
      {
        key: '5',
        path: '/product/cutting',
        name: 'Tổ cắt',
        component: CuttingGroup,
        icon: Scissors
      },
      {
        key: '6',
        path: '/product/embroidered-delivery',
        name: 'Chuyền may',
        component: EmbroideredDelivery,
        icon: Import
      }
    ]
  },
  { key: '7', path: 'colors', name: 'Màu', component: Color, icon: Palette },
  { key: '8', path: 'groups', name: 'Nhóm', component: Group, icon: GroupIcon },
  { key: '9', path: 'print-in', name: 'In - Thêu', component: PrintIn, icon: Printer },
  { key: '10', path: 'notion', name: 'Ghi chú phụ liệu', component: Notion, icon: StickyNote }
]

export default routes

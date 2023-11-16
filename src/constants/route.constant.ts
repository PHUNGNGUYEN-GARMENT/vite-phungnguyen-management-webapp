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
import InOutPutDate from '~/pages/InOutPutDate'
import Notion from '~/pages/Notion'
import PrintIn from '~/pages/PrintIn'
import ProductList from '~/pages/ProductList'
import Sewing from '~/pages/Sewing'

export const routes = [
  { key: '/dashboard', path: '/dashboard', name: 'Tổng quan', component: Dashboard, icon: LayoutDashboard },
  {
    key: '/product-info',
    path: '/product-info',
    name: 'Thông tin mã hàng',
    component: Outlet,
    icon: PackageSearch,
    childs: [
      {
        key: '/product-info/product-list',
        path: '/product-info/product-list',
        name: 'Danh sách mã hàng',
        component: ProductList,
        icon: ClipboardList
      },
      {
        key: '/product-info/importation',
        path: '/product-info/importation',
        name: 'Nhập khẩu',
        component: Importation,
        icon: Import
      },
      {
        key: '/product-info/sewings',
        path: '/product-info/sewings',
        name: 'May mẫu',
        component: Sewing,
        icon: Aperture
      },
      {
        key: '/product-info/accessories',
        path: '/product-info/accessories',
        name: 'Phụ liệu',
        component: Accessory,
        icon: PersonStanding
      },
      {
        key: '/product-info/cutting',
        path: '/product-info/cutting',
        name: 'Tổ cắt',
        component: CuttingGroup,
        icon: Scissors
      },
      {
        key: '/product-info/embroidered-delivery',
        path: '/product-info/embroidered-delivery',
        name: 'Chuyền may',
        component: EmbroideredDelivery,
        icon: Import
      }
    ]
  },
  {
    key: '/colors',
    path: '/colors',
    name: 'Màu',
    component: Color,
    icon: Palette
  },
  { key: '/groups', path: 'groups', name: 'Nhóm', component: Group, icon: GroupIcon },
  { key: '/print-in', path: 'print-in', name: 'In - Thêu', component: PrintIn, icon: Printer },
  { key: '/notion', path: 'notion', name: 'Ghi chú phụ liệu', component: Notion, icon: StickyNote }
]

export const routesMobile = [
  { key: '/dashboard', path: '/dashboard', name: 'Tổng quan', component: Dashboard, icon: LayoutDashboard },
  {
    key: '/product-info',
    path: '/product-info',
    name: 'Thông tin mã hàng',
    component: Outlet,
    icon: PackageSearch,
    childs: [
      {
        key: '/product-info/product-list',
        path: '/product-info/product-list',
        name: 'Danh sách mã hàng',
        component: ProductList,
        icon: ClipboardList
      },
      {
        key: '/product-info/in-out',
        path: '/product-info/in-out',
        name: 'Nhập - xuất',
        component: InOutPutDate,
        icon: ClipboardList
      },
      {
        key: '/product-info/sewings',
        path: '/product-info/sewings',
        name: 'May mẫu',
        component: Sewing,
        icon: Aperture
      },
      {
        key: '/product-info/accessories',
        path: '/product-info/accessories',
        name: 'Phụ liệu',
        component: Accessory,
        icon: PersonStanding
      },
      {
        key: '/product-info/cutting',
        path: '/product-info/cutting',
        name: 'Tổ cắt',
        component: CuttingGroup,
        icon: Scissors
      },
      {
        key: '/product-info/embroidered-delivery',
        path: '/product-info/embroidered-delivery',
        name: 'Chuyền may',
        component: EmbroideredDelivery,
        icon: Import
      }
    ]
  },
  {
    key: '/colors',
    path: '/colors',
    name: 'Màu',
    component: Color,
    icon: Palette
  },
  { key: '/groups', path: 'groups', name: 'Nhóm', component: Group, icon: GroupIcon },
  { key: '/print-in', path: 'print-in', name: 'In - Thêu', component: PrintIn, icon: Printer },
  { key: '/notion', path: 'notion', name: 'Ghi chú phụ liệu', component: Notion, icon: StickyNote }
]

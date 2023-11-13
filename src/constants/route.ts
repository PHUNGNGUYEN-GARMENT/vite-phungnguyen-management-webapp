import { Import, PackageSearch } from 'lucide-react'
import Importation from '~/pages/Imnportation'
import ProductInformation from '~/pages/ProductInformation'

const routes = [
  {
    key: 0,
    path: '/',
    name: 'Thông tin sản phẩm',
    component: ProductInformation,
    icon: PackageSearch
  },
  {
    key: 1,
    path: '/importation',
    name: 'Nhập khẩu',
    component: Importation,
    icon: Import
  }
]

export default routes

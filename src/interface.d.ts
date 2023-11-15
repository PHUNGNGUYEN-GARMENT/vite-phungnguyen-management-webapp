export interface IProductList {
  productID?: number
  productCode: string
  colors: IColor[]
  group: string
  quantityPO: number
  dateInputNPL: string
  dateOutputFCR: string
  placePrintIn: string
  createdAt: string
  updatedAt: string
}

export interface IColor {
  colorID: number
  nameColor: string
  rgbColor: string
  hexColor: string
  cmykColor: string
  hsvColor: string
  hslColor: string
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface IProductColor {
  colorID: number
  productID: number
  nameColor: string
  rgbColor: string
  hexColor: string
  cmykColor: string
  hsvColor: string
  hslColor: string
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface IGroup {
  groupID: number
  name: string
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface IProductGroup {
  groupID: number
  productID: number
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface IGarmentAccessoryNote {
  accessoryNoteID: number
  title: string
  summary: string
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface IGarmentAccessory {
  garmentAccessoryID: number
  productID: number
  notesOther: string
  amountCuttingAccessory: string
  dateDeliveryChain: string
  syncGarmentAccessoryState: boolean
  syncPackageAccessoryState: boolean
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface INotionAccessory {
  accessoryNoteID: number
  garmentAccessoryID: number
  createdAt: string
  updatedAt: string
  orderNumber: number
}

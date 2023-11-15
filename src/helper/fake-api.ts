import {
  IColor,
  IGarmentAccessory,
  IGarmentAccessoryNote,
  INotionAccessory,
  IProductColor,
  IProductList
} from '~/interface'

// Product list
export const productList: IProductList[] = [
  {
    productID: 0,
    productCode: 'GAC021254',
    colors: [
      {
        colorID: 1,
        nameColor: 'Milk',
        rgbColor: 'rgb(141, 141, 24)',
        hexColor: '#85851f',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 27%, 59%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 1
      },
      {
        colorID: 2,
        nameColor: 'Beige',
        rgbColor: 'rgb(46, 158, 161)',
        hexColor: '#2a8996',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 100%, 100%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 2
      }
    ],
    group: 'G1-4',
    quantityPO: 4000,
    dateInputNPL: '15/05/2023',
    dateOutputFCR: '07/07/2023',
    placePrintIn: 'T THINH',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023'
  },
  {
    productID: 1,
    productCode: 'GAC021254',
    colors: [
      {
        colorID: 1,
        nameColor: 'Milk',
        rgbColor: 'rgb(141, 141, 24)',
        hexColor: '#85851f',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 27%, 59%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 1
      },
      {
        colorID: 2,
        nameColor: 'Beige',
        rgbColor: 'rgb(46, 158, 161)',
        hexColor: '#2a8996',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 100%, 100%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 2
      }
    ],
    group: 'G1-4',
    quantityPO: 4000,
    dateInputNPL: '15/05/2023',
    dateOutputFCR: '07/07/2023',
    placePrintIn: 'T THINH',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023'
  },
  {
    productID: 2,
    productCode: 'GAC021254',
    colors: [
      {
        colorID: 1,
        nameColor: 'Milk',
        rgbColor: 'rgb(141, 141, 24)',
        hexColor: '#85851f',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 27%, 59%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 1
      },
      {
        colorID: 2,
        nameColor: 'Beige',
        rgbColor: 'rgb(46, 158, 161)',
        hexColor: '#2a8996',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 100%, 100%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 2
      }
    ],
    group: 'G1-4',
    quantityPO: 4000,
    dateInputNPL: '15/05/2023',
    dateOutputFCR: '07/07/2023',
    placePrintIn: 'T THINH',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023'
  },
  {
    productID: 3,
    productCode: 'GAC021254',
    colors: [
      {
        colorID: 1,
        nameColor: 'Milk',
        rgbColor: 'rgb(141, 141, 24)',
        hexColor: '#85851f',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 27%, 59%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 1
      },
      {
        colorID: 2,
        nameColor: 'Beige',
        rgbColor: 'rgb(46, 158, 161)',
        hexColor: '#2a8996',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 100%, 100%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 2
      }
    ],
    group: 'G1-4',
    quantityPO: 4000,
    dateInputNPL: '15/05/2023',
    dateOutputFCR: '07/07/2023',
    placePrintIn: 'T THINH',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023'
  },
  {
    productID: 4,
    productCode: 'GAC021254',
    colors: [
      {
        colorID: 1,
        nameColor: 'Milk',
        rgbColor: 'rgb(141, 141, 24)',
        hexColor: '#85851f',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 27%, 59%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 1
      },
      {
        colorID: 2,
        nameColor: 'Beige',
        rgbColor: 'rgb(46, 158, 161)',
        hexColor: '#2a8996',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 100%, 100%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 2
      }
    ],
    group: 'G1-4',
    quantityPO: 4000,
    dateInputNPL: '15/05/2023',
    dateOutputFCR: '07/07/2023',
    placePrintIn: 'T THINH',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023'
  },
  {
    productID: 5,
    productCode: 'GAC021254',
    colors: [
      {
        colorID: 1,
        nameColor: 'Milk',
        rgbColor: 'rgb(141, 141, 24)',
        hexColor: '#85851f',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 27%, 59%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 1
      },
      {
        colorID: 2,
        nameColor: 'Beige',
        rgbColor: 'rgb(46, 158, 161)',
        hexColor: '#2a8996',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 100%, 100%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 2
      }
    ],
    group: 'G1-4',
    quantityPO: 4000,
    dateInputNPL: '15/05/2023',
    dateOutputFCR: '07/07/2023',
    placePrintIn: 'T THINH',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023'
  },
  {
    productID: 6,
    productCode: 'GAC021254',
    colors: [
      {
        colorID: 1,
        nameColor: 'Milk',
        rgbColor: 'rgb(141, 141, 24)',
        hexColor: '#85851f',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 27%, 59%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 1
      },
      {
        colorID: 2,
        nameColor: 'Beige',
        rgbColor: 'rgb(46, 158, 161)',
        hexColor: '#2a8996',
        cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
        hsvColor: 'hsv(0, 100%, 100%)',
        hslColor: 'hsl(0, 100%, 100%)',
        createdAt: '15/05/2023',
        updatedAt: '15/05/2023',
        orderNumber: 2
      }
    ],
    group: 'G1-4',
    quantityPO: 4000,
    dateInputNPL: '15/05/2023',
    dateOutputFCR: '07/07/2023',
    placePrintIn: 'T THINH',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023'
  }
]

// colors
export const colors: IColor[] = [
  {
    colorID: 0,
    nameColor: 'Beige',
    rgbColor: 'rgb(59, 59, 11)',
    hexColor: 'hsl(0, 7%, 45%)',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    colorID: 1,
    nameColor: 'Milk',
    rgbColor: 'rgb(141, 141, 24)',
    hexColor: '#85851f',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 27%, 59%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 1
  },
  {
    colorID: 2,
    nameColor: 'Beige',
    rgbColor: 'rgb(46, 158, 161)',
    hexColor: '#2a8996',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 2
  },
  {
    colorID: 3,
    nameColor: 'Beige',
    rgbColor: 'rgb(245, 245, 220)',
    hexColor: '#f5f5dc',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 3
  }
]

// Product colors
export const productColors: IProductColor[] = [
  {
    colorID: 0,
    productID: 0,
    nameColor: 'Beige',
    rgbColor: 'rgb(245, 245, 220)',
    hexColor: '#f5f5dc',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    colorID: 1,
    productID: 1,
    nameColor: 'Beige',
    rgbColor: 'rgb(245, 245, 220)',
    hexColor: '#f5f5dc',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 1
  },
  {
    colorID: 2,
    productID: 2,
    nameColor: 'Beige',
    rgbColor: 'rgb(245, 245, 220)',
    hexColor: '#f5f5dc',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 2
  },
  {
    colorID: 3,
    productID: 3,
    nameColor: 'Beige',
    rgbColor: 'rgb(245, 245, 220)',
    hexColor: '#f5f5dc',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 3
  },
  {
    colorID: 4,
    productID: 4,
    nameColor: 'Beige',
    rgbColor: 'rgb(245, 245, 220)',
    hexColor: '#f5f5dc',
    cmykColor: 'cmyk(100%, 0%, 0%, 0%)',
    hsvColor: 'hsv(0, 100%, 100%)',
    hslColor: 'hsl(0, 100%, 100%)',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 4
  }
]

// Garment accessories notes
export const garmentAccessoryNotes: IGarmentAccessoryNote[] = [
  {
    accessoryNoteID: 0,
    title: 'Còn thiếu nhãn trang trí',
    summary: 'Beige',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 1,
    title: 'Dây viền dây luồn ok',
    summary: 'Summary',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 2,
    title: 'Ok',
    summary: 'Beige',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 3,
    title: 'Not ok',
    summary: 'Beige',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 4,
    title: 'Cần chỉnh sửa lại',
    summary: 'Beige',
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  }
]

// Garment accessories
export const garmentAccessories: IGarmentAccessory[] = [
  {
    garmentAccessoryID: 0,
    productID: 1,
    notesOther: 'Other notes',
    amountCuttingAccessory: '3500/4000',
    dateDeliveryChain: '15/05/2023',
    syncGarmentAccessoryState: false,
    syncPackageAccessoryState: false,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    garmentAccessoryID: 1,
    productID: 2,
    notesOther: 'Other notes',
    amountCuttingAccessory: '3500/4000',
    dateDeliveryChain: '15/05/2023',
    syncGarmentAccessoryState: false,
    syncPackageAccessoryState: false,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 1
  },
  {
    garmentAccessoryID: 2,
    productID: 2,
    notesOther: 'Other notes',
    amountCuttingAccessory: '3500/4000',
    dateDeliveryChain: '15/05/2023',
    syncGarmentAccessoryState: false,
    syncPackageAccessoryState: false,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 2
  },
  {
    garmentAccessoryID: 3,
    productID: 1,
    notesOther: 'Other notes',
    amountCuttingAccessory: '3500/4000',
    dateDeliveryChain: '15/05/2023',
    syncGarmentAccessoryState: false,
    syncPackageAccessoryState: false,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 3
  },
  {
    garmentAccessoryID: 4,
    productID: 3,
    notesOther: 'Other notes',
    amountCuttingAccessory: '3500/4000',
    dateDeliveryChain: '15/05/2023',
    syncGarmentAccessoryState: false,
    syncPackageAccessoryState: false,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 4
  }
]

// Notion accessories
export const notionAccessories: INotionAccessory[] = [
  {
    accessoryNoteID: 0,
    garmentAccessoryID: 1,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 1,
    garmentAccessoryID: 1,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 2,
    garmentAccessoryID: 1,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 3,
    garmentAccessoryID: 1,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  },
  {
    accessoryNoteID: 4,
    garmentAccessoryID: 1,
    createdAt: '15/05/2023',
    updatedAt: '15/05/2023',
    orderNumber: 0
  }
]

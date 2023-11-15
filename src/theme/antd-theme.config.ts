// theme/themeConfig.ts
import type { ThemeConfig } from 'antd'

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#ff6b00'
  },
  components: {
    Layout: {
      siderBg: '#ffffff',
      colorBgContainer: '#ffffff',
      colorBgLayout: '#ffffff'
    }
  }
}

export default themeConfig

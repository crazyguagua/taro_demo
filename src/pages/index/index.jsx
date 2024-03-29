import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.less'

const env = process.env.TARO_APP_BASE_URL
function Index() {
  return (
    <View className="nutui-react-demo">
        <View>当前环境:{env}</View>
      <View className="index">

        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
    </View>
  )
}

export default Index

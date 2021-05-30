import React, { FC, Fragment } from 'react'
import { View } from '@tarojs/components'
import boot from '@/static/biz/hoc/boot'
import useMain from './service/useMain'
import BodyIndex from './components/body-index'
import Features from './components/features'
import HealthTool from './components/health-tool'
import Userinfo from './components/userinfo'
import style from './index.module.scss'


const Test: FC = () => {

  const { isLogin, lastMeasure } = useMain()
  console.log('index刷新了', isLogin)
  // throw new Error("调试用途xxx");
  return (
    <View className={style.main}>
      <Userinfo lastMeasure={lastMeasure}></Userinfo>
      {
        isLogin 
          ? <Fragment>
              <Features showDeepReport={lastMeasure?.depth_report_flag}></Features>
              <BodyIndex lastMeasure={lastMeasure}></BodyIndex>
              <HealthTool></HealthTool>
            </Fragment> 
          : <View>未登录</View> 
      }
    </View>
  )
}

export default boot(Test)

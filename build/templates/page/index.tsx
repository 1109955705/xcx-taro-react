import React, { FC } from 'react'
import { View } from '@tarojs/components'
import style from './index.module.scss'

interface @pascalNamePropsType {}

const @pascalName: FC<@pascalNamePropsType> = () => {
  return (
    <View className={style.main}></View>
  )
}

@pascalName.defaultProps = {}

export default @pascalName

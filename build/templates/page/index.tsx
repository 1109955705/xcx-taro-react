import React from 'react';
import { View } from '@tarojs/components';
import boot from '@/static/biz/hoc/boot';
import style from './index.module.scss';

const @pascalName = () => {
  return <View className={style.main}>@pascalName</View>;
}


export default boot(@pascalName);

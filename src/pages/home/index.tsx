import Taro, { useDidShow } from '@tarojs/taro';
import React, { FC, Fragment, useEffect } from 'react';
import { View } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import boot from '@/static/biz/hoc/boot';
import tipPng from '@/assets/images/.png';
import { setTabbarIndex } from '../../store/actions';
import useMain from './useMain';
import BodyIndex from './components/body-index';
import Features from './components/features';
import HealthTool from './components/health-tool';
import Userinfo from './components/userinfo';
import style from './index.module.scss';

const Home = () => {
  const { isLogin, lastMeasure } = useMain();

  const themeColor = useSelector((state: ReduxRootState) => state.themeColor);
  const dispatch = useDispatch();

  useEffect(() => {
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: themeColor,
    });
  }, [themeColor]);

  useDidShow(() => {
    dispatch(setTabbarIndex(0));
  });

  return (
    <View className={style.main}>
      <Userinfo lastMeasure={lastMeasure} />
      {isLogin && <Features showDeepReport={lastMeasure?.depth_report_flag} />}
      {isLogin && <BodyIndex lastMeasure={lastMeasure} />}
      {isLogin && <HealthTool />}
    </View>
  );
};

export default boot(Home);

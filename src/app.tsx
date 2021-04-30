import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import theme from '@/static/biz/theme'
import configStore from './store'
import './app.scss'

const { store, persistor} = configStore()

class App extends Component {
  componentDidMount () {
    console.log('app:didmount', theme )
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={this.props.children} persistor={persistor}>
          {this.props.children}
        </PersistGate> 
      </Provider>
    )
  }
}

export default App

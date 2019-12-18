import React, { Component } from 'react'
import {Button, InputItem } from 'antd-mobile'
import styles from './index.less'
// import { createForm } from 'rc-form';

export default class index extends Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.loginFormItem}>
          <InputItem>账户</InputItem>
        </div>
        <div className={styles.loginFormItem}>
          <InputItem>密码</InputItem>
        </div>
        <Button type="primary">登录</Button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import {Button, InputItem, Toast } from 'antd-mobile'
import styles from './index.less'
import { createForm } from 'rc-form';

class Index extends Component {
  handleSubmit = ()=> {
    console.log(this.props.form.getFieldError('password'));
    console.log(this.props.form.getFieldsValue());
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div className={styles.login}>
        <div className={styles.loginFormItem}>
          <InputItem
            placeholder="请输入账号"
            {...getFieldProps('account',{rules: [
              {required: true, message:"账号必填"},
              {validator(rule, value, callback){
                // TODO: 为熟悉validtor的使用
                if(!value) {
                  callback('账号必填')
                }
                let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
                if (reg.test(value)) {
                  callback('账号不能为中文')
                }
              }}
            ]})}
            error={getFieldError('account')?true:false}
            onErrorClick={() => {Toast.info(getFieldError('account'))}}
          >账户
          </InputItem>
        </div>
        <div className={styles.loginFormItem}>
          <InputItem
            type="password"
            placeholder="请输入密码"
            {...getFieldProps('password',{rules: [
              {required: true, message:"密码必填"},
            ]})}
            error={getFieldError('password')?true:false}
            onErrorClick={() => {Toast.info(getFieldError('password'))}}
          >密码
          </InputItem>
        </div>
        <Button type="primary" onClick={() => this.handleSubmit}>登录</Button>
      </div>
    )
  }
}

export default createForm()(Index)

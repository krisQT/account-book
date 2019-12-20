import React, { Component } from 'react'
import { Button, InputItem, Toast } from 'antd-mobile'
import styles from './index.less'
import { createForm } from 'rc-form';

class Index extends Component {
  handleSubmit = () => {
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);  
      }
    });
    // console.log(this.props.form.getFieldsValue());
  }
  render() {
    const { getFieldProps, getFieldError, getFieldDecorator } = this.props.form;

    return (
      <form>
      <div className={styles.login}>
        <div className={styles.loginFormItem}>
          {
            getFieldDecorator('account', {
              rules: [
                { required: true,  message: "账号必填" },
                {pattern: /^\d+(\.\d+)?$/, message: "请输入数字账号"}
              ]
            })(
              <InputItem
                placeholder="请输入账号"
                error={getFieldError('account') ? true : false}
                onErrorClick={() => { Toast.info(getFieldError('account')) }}
              >账户
              </InputItem>
            )
          }
        </div>
        <div className={styles.loginFormItem}>
          {
            getFieldDecorator('password', {
              rules: [
                { required: true, message: "密码必填" }
              ]
            })(
              <InputItem
                placeholder="请输入密码"
                error={getFieldError('password') ? true : false}
                onErrorClick={() => { Toast.info(getFieldError('password')) }}
              >密码
              </InputItem>
            )
          }
        </div>
        <Button type="primary" onClick={() => this.handleSubmit()}>登录</Button>
      </div>
          </form>
    )
  }
}

export default createForm()(Index)

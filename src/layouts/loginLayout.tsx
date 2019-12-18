/*
 * @description: 登录布局
 * @Author: zhichao.q
 * @Date: 2019-12-17 18:29:02 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-18 11:33:06
 */
import React from 'react';
import styles from './loginLayout.less';

const LoginLayout: React.FC = props => {
    return (
      <div className={styles.loginLayout}>
        <div className={styles.top}>
          <div className={styles.topIcon} />
          <p>欢迎使用记账本</p>
        </div>
        {props.children}
      </div>
    )
}

export default LoginLayout;

/*
 * @description: 基本布局
 * @Author: zhichao.q
 * @Date: 2019-12-17 18:29:02 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-17 18:30:31
 */

import React from 'react';
import styles from './basicLayout.less';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;

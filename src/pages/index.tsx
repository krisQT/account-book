import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import styles from './index.less';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default function() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.subTitle}>Basic</div>
      <Flex>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />

      <div className={styles.subTitle}>Wrap</div>
      <Flex wrap="wrap">
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
      </Flex>
      <WhiteSpace size="lg" />

      <div className={styles.subTitle}>Align</div>
      <Flex justify="center">
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
      </Flex>
      <WhiteSpace />
      <Flex justify="end">
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
      </Flex>
      <WhiteSpace />
      <Flex justify="between">
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={styles.inline} />
      </Flex>

      <WhiteSpace />
      <Flex align="start">
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={[`${styles.inline}`,`${styles.small}`].join(' ')}/>
        <PlaceHolder className={styles.inline} />
      </Flex>
      <WhiteSpace />
      <Flex align="end">
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={[`${styles.inline}`,`${styles.small}`].join(' ')} />
        <PlaceHolder className={styles.inline} />
      </Flex>
      <WhiteSpace />
      <Flex align="baseline">
        <PlaceHolder className={styles.inline} />
        <PlaceHolder className={[`${styles.inline}`,`${styles.small}`].join(' ')} />
        <PlaceHolder className={styles.inline} />
      </Flex>
    </div>
  );
}
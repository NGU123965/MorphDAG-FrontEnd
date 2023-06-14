import * as React from 'react';
import styles from './index.module.css';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <div style={{ background: '#171b1e', height: '50px' }} />
      <span className={styles.logo} style={{ fontSize: '30px', lineHeight: '2.5', color: '#4e85fc' }}>联系我们</span>
      <br />
      <span className={styles.logo} style={{ fontSize: '20px', lineHeight: '1.5' }}>微信公众号：图链存储</span>
      <br />
      <span className={styles.logo} style={{ fontSize: '20px', lineHeight: '1.5' }}>CGCL&BCTS</span>
      <br />
      <span className={styles.copyright} style={{ fontSize: '20px', lineHeight: '1.5' }}>Copyright © 2022-现在 CGCL & BCTS</span>
      <div style={{ background: '#171b1e', height: '50px' }} />
    </p>
  );
}

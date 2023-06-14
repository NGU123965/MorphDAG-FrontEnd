import * as React from 'react';
import styles from './index.module.css';
import pic from './logo.jpg';

export default function Footer() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: '1', marginLeft: '150px' }}>
        <p className={styles.footer}>
          <span className={styles.logo} style={{ fontSize: '30px', lineHeight: '2.5', color: '#4e85fc' }}>联系我们</span>
          <br />
          <span className={styles.logo} style={{ fontSize: '20px', lineHeight: '1.5' }}>微信公众号：图链存储</span>
          <br />
          <span className={styles.logo} style={{ fontSize: '20px', lineHeight: '1.5' }}>CGCL&BCTS</span>
          <br />
          <span className={styles.logo} style={{ fontSize: '20px', lineHeight: '1.5' }}>Copyright © 2022-现在 CGCL & BCTS</span>
        </p>
      </div>
      <div style={{ flex: '1', marginLeft: '150px', marginBottom: '-25px' }}>
        <img
          src={pic}
          alt="图片"
          style={{ width: '50%', height: 'auto' }}
        />
      </div>
    </div>
  );
}

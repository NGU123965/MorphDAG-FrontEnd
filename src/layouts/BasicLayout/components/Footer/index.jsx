import * as React from 'react';
import styles from './index.module.css';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo} style={{ fontSize: '20px' }}>CGCL&BCTS</span>
      <br />
      <span className={styles.copyright} style={{ fontSize: '20px' }}>© 2022-现在 CGCL & BCTS</span>
    </p>
  );
}

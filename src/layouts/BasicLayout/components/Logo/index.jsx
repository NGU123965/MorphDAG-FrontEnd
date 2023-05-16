import * as React from 'react';
import { Link } from 'ice';
import styles from './index.module.css';
import logo from './logo.png';

export default function Logo({ image, text, url }) {
  return (
    <div className="logo">
      <Link to={url || '/dashboard/mainpage'} className={styles.logo}>
        {image && <img src={logo} alt="logo" />}
        <span >{text}</span>
      </Link>
    </div>
  );
}


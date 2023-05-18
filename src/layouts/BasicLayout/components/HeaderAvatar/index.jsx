import * as React from 'react';
import { Avatar, Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.css';

const { Item } = Menu;
const { Popup } = Overlay;

const UserProfile = ({ name, avatar, mail }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar alt="用户头像" />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <span>{mail}</span>
      </div>
    </div>
  );
};

const HeaderAvatar = (props) => {
  const { name, avatar } = props;
  return (
    <Popup
      trigger={
        <div className={styles.headerAvatar}>
          <span
            style={{
              marginLeft: 10,
            }}
          >
            {name}
          </span>
        </div>
      }
      triggerType="click"
    >
      <div className={styles.avatarPopup}>
        <UserProfile {...props} />
        <Menu className={styles.menu}>
          <Item>
            <Icon size="small" type="account" />
            个人设置
          </Item>
          <Item>
            <Icon size="small" type="set" />
            系统设置
          </Item>
          <Item>
            <Icon size="small" type="exit" />
            退出
          </Item>
        </Menu>
      </div>
    </Popup>
  );
};

HeaderAvatar.defaultProps = {
  name: 'Demo',
};
export default HeaderAvatar;

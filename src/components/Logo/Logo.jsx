import { Component } from 'react';

import styles from './Logo.module.css';

import { ReactComponent as LogoImage } from '../../images/logo.svg';

class Logo extends Component {
  render() {
    return <LogoImage className={styles.logo} title="Logo" alt="Logo" />;
  }
}

export default Logo;

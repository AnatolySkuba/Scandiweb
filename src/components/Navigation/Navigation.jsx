import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

import routes from '../../routes';

class Navigation extends Component {
  render() {
    const categories = this.props.categories;

    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles['link--active']}
          >
            all
          </NavLink>
        </li>

        {categories &&
          categories.map(category => {
            return (
              <li className={styles.item} key={category.name}>
                <NavLink
                  exact
                  to={`/${category.name}`}
                  className={styles.link}
                  activeClassName={styles['link--active']}
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Navigation;

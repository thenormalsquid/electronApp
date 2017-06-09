// @flow
import React from 'react';
import { compose, pure } from 'recompose';
import { Link } from 'react-router-dom';
import styles from './SideBar.css';
type WrappedProps = {

};

type Props = {
    filters: Array;
} & WrappedProps;

// this component is used in routes.js
export const SideBar = (props: Props) =>
    <div className={styles.container}>
      <ul>
      {props.filters.map((route, i) => {
          return (
            <li key={i}><Link to={`/filters/${i}`}>{route.name}</Link></li>
          );
      })}
      </ul>
    </div>;

const enhance = compose(
    pure
);
export default enhance(SideBar);
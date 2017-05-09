import * as React from 'react';
import { Link } from 'react-router';

let styles = require('./Home.scss');

interface IProps {

}
export default class Home extends React.Component<IProps, void> {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}

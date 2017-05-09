import * as React from 'react';
// import { Link } from 'react-router';

let styles = require('./Home.scss');

interface IProps {

}
export default class Home extends React.Component<IProps, void> {
  render() {
    return (
      <div>
        <div className={styles.container}>
        </div>
      </div>
    );
  }
}

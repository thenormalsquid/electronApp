// @flow
import React from 'react';
import { compose, pure } from 'recompose';
import styles from './Canvas.css';

type Props = {
    width: number,
    height: number
};

const Canvas = (props : Props) => 
    <div className={styles.container} data-tid="container">
        <canvas data-tid="imgCanvas" width={props.width} height={props.height}>
        </canvas>
    </div>;

const enhance = compose(
    pure
);
export default enhance(Canvas);
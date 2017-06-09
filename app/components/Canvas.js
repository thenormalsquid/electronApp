// @flow
import React from 'react';
import { compose, pure } from 'recompose';
import styles from './Canvas.css';

type Props = {
    width: number,
    height: number,
    imageObj: ?HTMLImageElement
};

const Canvas = (props : Props) => 
    <div className={styles.container} data-tid="container">
        {props.imageObj ? <div><img src={props.imageObj.src} /></div> : <br />}
        <canvas data-tid="imgCanvas" width={props.width} height={props.height}>
        </canvas>
    </div>;

const enhance = compose(
    pure
);
export default enhance(Canvas);
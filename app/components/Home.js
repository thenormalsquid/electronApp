// @flow
import React from 'react';
import { compose, pure } from 'recompose';

import Canvas from 'components/Canvas';
import FileUploader from 'components/FileUploader';

type WrappedProps = {

};

type Props = {
    width: number;
    height: number;
    imageObj: ?HTMLImageElement;
    uploadImage: Function;
} & WrappedProps;

export const Home = ({ imageObj, ...props}: Props) =>
    <div>
      { imageObj ? 
        <Canvas width={props.width} height={props.height} imageObj={imageObj} />
        :
        <FileUploader uploadImage={props.uploadImage} />
       }
    </div>;

const enhance = compose(
    pure
);
export default enhance(Home);
// @flow
import React from 'react';
import { compose, pure } from 'recompose';

type WrappedProps = {

};

type Props = {
    applyAction: Function,
    uploadImage: Function,
    images: Array
} & WrappedProps;

export const CompareImages = ({ applyAction, uploadImage }: Props) =>
    ;

const enhance = compose(
    pure
);
export default enhance(CompareImages);
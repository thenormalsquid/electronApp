// @flow
import React from 'react';
import { compose, pure, mapProps, componentFromProp } from 'recompose';
import { connect } from 'react-redux';

//action creators
import { uploadImage } from 'actions/image';

type WrappedProps = {
    uploadImage: ?() => *;
};

type Props = {

} & WrappedProps;

export const FilterContainer = (props: Props) =>
    <div></div>;

const enhance = compose(
    connect((state, ownProps) => ({
        filterList: state.filters.list,
      }), {
      uploadImage
    }),
    pure
);
export default enhance(FilterContainer);
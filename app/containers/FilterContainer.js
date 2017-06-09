// @flow
import React from 'react';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

//action creators
import { uploadImage } from 'actions/image';

type WrappedProps = {
    uploadImage: ?() => *;
};

type Props = {

} & WrappedProps;

export const FilterContainer = (props: Props) =>
    <div>Hi there </div>;

const enhance = compose(
    connect((state, ownProps) => ({
        filterList: state.filters.list,
        selectedFilter: state.filters && state.filters.list[parseInt(ownProps.match.params.id, 10)] 
      }), {
      uploadImage
    }),
    pure
);
export default enhance(FilterContainer);
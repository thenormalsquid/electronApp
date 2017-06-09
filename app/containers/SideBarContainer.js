// @flow
import React from 'react';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import SideBar from 'components/SideBar';

type WrappedProps = {
};

type Props = {
   filters: Array;
} & WrappedProps;

export const SideBarContainer = (props: Props) =>
    <SideBar {...props} />;

const mapStateToProps = (state) : Props => ({
    filters: state.filters.list
});

const enhance = compose(
    connect(mapStateToProps),
    pure
);
export default enhance(SideBarContainer);
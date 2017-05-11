// @flow
import React from 'react';
import { connect } from 'react-redux';
import Canvas from 'components/Canvas';
import { globalStateType } from 'reducers';

type Props = {
    width: number,
    height: number
};

const HomeContainer = ({ width, height } : Props) => 
    <Canvas width={width} height={height} />;


const mapStateToProps = (state : globalStateType) : Props => ({
    width: state.image.width,
    height: state.image.height
});

export default connect(mapStateToProps)(HomeContainer);
// @flow
import React from 'react';
import { compose, lifecycle, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
import { Route } from 'react-router';

import SideBarContainer from 'containers/SideBarContainer';
import FilterContainer from 'containers/FilterContainer';
// action creators
import { uploadImage } from 'actions/image';

type WrappedProps = {
};

type Props = {

} & WrappedProps;

const HomeContainer = (props: Props) => 
  <div style={{ display: 'flex', height: props.height }}>
    <SideBarContainer />
    <Route path='/filters/:id' component={FilterContainer} />
  </div>;

const componentLifecycle = {
    componentDidMount() {
        // event is sent from menu.js
        ipcRenderer.on('file-upload-menu-success', (event, fileName) => {
            this.props.uploadImage(fileName);
        }); 

       // don't redirect when drag+drop files
       document.addEventListener('dragover', this.props.dummyListener, false);
       document.addEventListener('drop', this.props.dummyListener, false);
       window.addEventListener('resize', this.props.updateDimensions);
    },
    componentWillUnmount() {
       window.removeEventListener("resize", this.props.updateDimensions);
    }
};

const enhance = compose(
    connect(null, { uploadImage }),
    withState('height', 'setHeight', window.innerHeight),
    withHandlers({
        dummyListener: () => e => {
            // don't redirect to just the image when drag+drop image
            e.preventDefault();
            return false;
        },
        updateDimensions: props => e => {
           e.preventDefault(); 
           props.setHeight(window.innerHeight);
        }
    }),
    lifecycle(componentLifecycle)
);

export default enhance(HomeContainer);
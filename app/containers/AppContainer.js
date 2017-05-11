// @flow
import React from 'react';
import type { Children } from 'react';

const AppContainer = ({ children } : {children: Children}) => 
  <div>
    {children}
  </div>;


export default AppContainer;
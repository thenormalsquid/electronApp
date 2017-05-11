import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Canvas from 'components/Canvas';

// actual unittest

function setup() {
  const actions = {
    // decrement: spy()
  };
  const component = shallow(<Canvas width={800} height={600} {...actions} />);
  return {
    component,
    actions
  };
}

describe('Canvas component', () => {
  it('should should render div', () => {
    const { component } = setup();
    expect()
  });
});

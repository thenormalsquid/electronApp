import { spy } from 'sinon';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import FileUploader, { FileUploader as Component } from 'components/FileUploader';

// actual unittest
describe('FileUploader component', () => {
  let wrapper, actions, instance, enhancedWrapper;

  beforeEach(() => {
    // test the HOC bit
    enhancedWrapper = mount(<FileUploader uploadImage={undefined} />);
    wrapper = shallow(<Component />);
    instance = wrapper.instance();
  });

  it('should render itself', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('svg')).toHaveLength(1);
    expect(wrapper.find('input#file')).toHaveLength(1);
  });

  describe('when FileUploader receives uploadImage as prop', () => {
    let files = [{ path: 'foo.jpg', type: 'jpg' }],
        uploadImage = undefined;

    beforeEach(() => {
      uploadImage = spy();
      enhancedWrapper.setProps({ uploadImage });
    });

    it('should call uploadImage when file is dropped', () => {
      const div = enhancedWrapper.find('div');
      div.props().onDrop({
        dataTransfer: {
          files 
        }
      });
      expect(uploadImage.called).toBe(true);
      expect(uploadImage.calledWith(files[0].path)).toBe(true);
    });

    it('should call uploadImage when file input is changed', () => {
      const input = enhancedWrapper.find('input#file');
      input.simulate('change', { target: { files }});
      expect(uploadImage.called).toBe(true);
      expect(uploadImage.calledWith(files[0].path)).toBe(true);
    });

  });

});
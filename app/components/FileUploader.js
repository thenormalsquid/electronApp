// @flow
import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { dialog } from 'electron';
import styles from './FileUploader.css';
import { isImage } from 'utils/utils';

type WrappedProps = {
  onDrop: Function;
  onChange: Function;
};

type Props = {
    uploadImage: (filename: string) => void;
} & WrappedProps;

export const FileUploader = (props : Props) => 
 <div className={styles.box} onDrop={props.onDrop}>
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43">
      <path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"></path>
    </svg>
    <input onChange={props.onChange} className={styles.file} type="file" name="file" id="file" />
    <label htmlFor="file" className={styles.label}><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
  </div>;

const handleFileUpload = (e, cb) => {
  const { dataTransfer, target } = e;
  const file = dataTransfer ? dataTransfer.files[0] : target.files[0];
  if(file && isImage(file.type)) {
    cb(file.path);
  }
}

const enhance = compose(
    pure,
    withHandlers({
      onDrop: props => e => {
        handleFileUpload(e, props.uploadImage);
      },
      onChange: props => e => {
        handleFileUpload(e, props.uploadImage);
      }
    })
);
export default enhance(FileUploader);
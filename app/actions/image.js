// @flow
import type { imageStateType } from 'reducers/image';

import { 
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_ERR
} from 'actions/constants';

export const FAILEDUPLOADMSG = 'Failed to upload that image.';

export const uploadImage = (filename: string) => ({
    type: UPLOAD_IMAGE,
    payload: new Promise((resolve, reject) => {
      if(!filename) {
        reject(FAILEDUPLOADMSG);
      }
      const image = new Image();
      image.onload = (e) => {
        const { width, height } = e.target;
        const dHeight = 800 / height;

        // scale image width down if width > 800
        const newHeight = (width > 800) ? height * dHeight : height;
        const newWidth = (width > 800) ? 800 : width;
        resolve({ image: e.target, width: newWidth, height: newHeight });
      };
      image.onerror = () => {
        reject(FAILEDUPLOADMSG);
      };

      image.src = filename;
    })
});
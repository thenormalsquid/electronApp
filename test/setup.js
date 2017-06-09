import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body><img id="foo" /></body></html>', { resources: "usable" });
global.window = document.defaultView;
global.Image = window.Image;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};

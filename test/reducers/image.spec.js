import image from 'reducers/image';

const initialState = {
  width: 800,
  height: 600
};

describe('reducers', () => {
  beforeEach(() => {
    return 
  });
  describe('counter', () => {
    it('should handle initial state', () => {
      console.log(image({ width: 800, height: 600 }, {}));
    });
  });
});

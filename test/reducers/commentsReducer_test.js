import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/commentsReducer';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comment reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentsReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = {type: SAVE_COMMENT, payload: {id: 0, comment: 'New comment'}};
    expect(commentsReducer([], action)).to.eql([{id: 0, comment: 'New comment'}]);
  });
});

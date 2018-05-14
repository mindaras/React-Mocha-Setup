import { SAVE_COMMENT } from './types';

export function saveComment(id, comment) {
  return {
    type: SAVE_COMMENT,
    payload: {
      id,
      comment
    }
  }
};

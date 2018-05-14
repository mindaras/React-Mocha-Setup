import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: [{id: 0, comment: 'Comment 1'}, {id: 1, comment: 'Comment 2'}] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });
  
  it('shows each comments text', () => {
    expect(component).to.contain('Comment 1');
    expect(component).to.contain('Comment 2');
  });
});

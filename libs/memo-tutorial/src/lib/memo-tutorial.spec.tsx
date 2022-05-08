import { render } from '@testing-library/react';

import MemoTutorial from './memo-tutorial';

describe('MemoTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MemoTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

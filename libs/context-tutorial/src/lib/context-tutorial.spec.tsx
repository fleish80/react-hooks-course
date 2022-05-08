import { render } from '@testing-library/react';

import ContextTutorial from './context-tutorial';

describe('ContextTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

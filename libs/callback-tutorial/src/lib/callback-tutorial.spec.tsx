import { render } from '@testing-library/react';

import CallbackTutorial from './callback-tutorial';

describe('CallbackTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallbackTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

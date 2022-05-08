import { render } from '@testing-library/react';

import RefTutorial from './ref-tutorial';

describe('RefTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RefTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

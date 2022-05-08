import { render } from '@testing-library/react';

import StateTutorial from './state-tutorial';

describe('StateTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

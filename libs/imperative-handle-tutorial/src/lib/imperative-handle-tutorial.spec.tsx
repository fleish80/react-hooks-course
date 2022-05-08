import { render } from '@testing-library/react';

import ImperativeHandleTutorial from './imperative-handle-tutorial';

describe('ImperativeHandleTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImperativeHandleTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

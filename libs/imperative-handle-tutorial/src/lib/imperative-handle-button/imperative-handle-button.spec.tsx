import { render } from '@testing-library/react';

import ImperativeHandleButton from './imperative-handle-button';

describe('ImperativeHandleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImperativeHandleButton />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ReducerTutorial from './reducer-tutorial';

describe('ReducerTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReducerTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

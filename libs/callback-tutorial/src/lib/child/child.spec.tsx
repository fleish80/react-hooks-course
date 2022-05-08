import { render } from '@testing-library/react';

import Child from './child';

describe('Child', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Child />);
    expect(baseElement).toBeTruthy();
  });
});

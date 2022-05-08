import { render } from '@testing-library/react';

import LayoutEffectTutorial from './layout-effect-tutorial';

describe('LayoutEffectTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutEffectTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import EffectTutorial from './effect-tutorial';

describe('EffectTutorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EffectTutorial />);
    expect(baseElement).toBeTruthy();
  });
});

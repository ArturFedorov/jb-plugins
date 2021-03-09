import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  const tooltip = shallow(
    <Tooltip>
      <span>Test</span>
    </Tooltip>
  );

  it('should be hidden by default', () => {
    const message = tooltip.find('.tooltipMessage');
    expect(message.hasClass('tooltipMessageVisible')).toBe(false);
  });

  it('should be visible when trigger hovered', () => {
    const trigger = tooltip.find('.tooltipTrigger');
    trigger.simulate('mouseenter');

    const message = tooltip.find('.tooltipMessage');
    expect(message.hasClass('tooltipMessageVisible')).toBe(true);
  });
});

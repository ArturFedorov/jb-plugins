import React from 'react';
import { shallow } from 'enzyme';
import { IModalProps, Modal } from './Modal';

describe('Modal', () => {
  const defaultProps: IModalProps = {
    header: 'Test header',
    message: 'Test message',
    onClose: jest.fn()
  };

  it('should match a snapshot', () => {
    const modal = shallow(<Modal {...defaultProps} />);
    expect(modal).toMatchSnapshot();
  });
});

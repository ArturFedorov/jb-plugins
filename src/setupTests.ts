// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import createMockStore from 'redux-mock-store';

export const mockStore = createMockStore([thunk]);
configure({ adapter: new Adapter() });

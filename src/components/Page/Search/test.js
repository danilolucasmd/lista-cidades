import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Search from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'configureStore';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render without throwing an error', () => {
  expect(shallow(<Search store={store} />).exists(<form></form>)).toBe(true);
});

it('renders correctly', () => {
  const tree = renderer.create(
    <Search store={store} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
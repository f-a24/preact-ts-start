import { h } from 'preact';
import { mount } from 'enzyme';
import App from '../src/App';
import 'jest-styled-components';

describe('App', () => {
  test('<App />', () => {
    const app = mount((<App title="Welcome to Preact" />) as JSX.Element);
    expect(app.text()).toBe('Welcome to Preact');
    expect(app).toHaveStyleRule('color', 'aqua');
  });
});

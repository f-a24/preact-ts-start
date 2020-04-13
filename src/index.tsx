import { render, h, Fragment } from 'preact';
import { Reset } from 'styled-reset';
import App from './App';

render(
  <Fragment>
    <Reset />
    <App title="Welcome to Preact" />
  </Fragment>,
  document.getElementById('root') as HTMLElement
);

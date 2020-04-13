import { h, FunctionalComponent } from 'preact';
import styled from 'styled-components';

const App: FunctionalComponent<{ title: string }> = ({ title }) => (
  <Title>{title}</Title>
);

export default App;

const Title = styled.h1`
  color: aqua;
`;

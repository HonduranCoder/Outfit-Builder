import { render, screen } from '@testing-library/react';
import Display from './Display';

it('should render Display component', () => {
  const { container } = render(
    <Display catchphrases={['cheer', 'cry', 'nod']}></Display>
  );
  expect(container).toMatchSnapshot();
});

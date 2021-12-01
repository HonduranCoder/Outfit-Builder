import { screen, render } from '@testing-library/react';
import Picker from './Picker';

it('should render our Picker component', () => {
  const { container } = render(<Picker />);
  const selectFace = screen.getByLabelText('Face');
  const selectTop = screen.getByLabelText('Top');
  const selectBottom = screen.getByLabelText('Bottom');
  const input = screen.getByLabelText('New Catchphrase:');

  expect(selectFace).toBeInTheDocument();
  expect(selectTop).toBeInTheDocument();
  expect(selectBottom).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

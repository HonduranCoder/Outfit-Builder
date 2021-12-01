import { screen, render } from '@testing-library/react';
import Character from './Character';

it('should render pieces of character', () => {
  const { container } = render(
    <Character face="smiley" top="tank" bottom="shorts" />
  );
  const face = screen.getByLabelText('face');
  const top = screen.getByLabelText('top');
  const bottom = screen.getByLabelText('bottom');

  expect(face).toHaveStyle(`background-image: url(./smiley-head.png)`);
  expect(top).toHaveStyle(`background-image: url(./tank-top.png)`);
  expect(bottom).toHaveStyle(`background-image: url(./shorts-bottom.png)`);

  expect(container).toMatchSnapshot();
});

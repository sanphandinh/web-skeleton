import HomePage from '../../pages';
import { render } from '../../utils/testUtils';

describe('Home page should be work', () => {
  function setup() {
    return render(<HomePage />);
  }
  test('Home page has web and button', () => {
    const { findByRole, findByText } = setup();
    expect(findByRole('button')).toBeTruthy();
    expect(findByText('Web')).toBeTruthy();
  });
});

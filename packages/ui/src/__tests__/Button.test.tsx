import { render } from '../testUtils';
import { Button } from '../Button';

describe('<Button/> should work correctly', () => {
  function setup() {
    return render(<Button />);
  }
  test('<Button /> should render correctly and without crash', () => {
    const { getByRole } = setup();
    expect(getByRole('button')).toBeTruthy();
  });
});

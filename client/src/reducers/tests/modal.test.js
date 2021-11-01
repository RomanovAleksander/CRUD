import {
  toggleForm
} from '../../actions/modal/actions';
import {modal} from '../modal';

test('form should be toggled', () => {
  let action = toggleForm();
  let state = {
    isOpen: false
  };

  let newState = modal(state, action);

  expect(newState.isOpen).toBe(!state.isOpen)
});

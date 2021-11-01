import {
  toggleForm
} from '../../actions/modal/actions';
import {modal} from '../modal';

describe('Modal Reducer', () => {
  const initialState = {
    isOpen: false
  };

  test('should return the initial state', () => {
    expect(modal(undefined, {})).toEqual(initialState);
  });

  test('form should be toggled', () => {
    expect(modal(undefined, toggleForm()))
      .toEqual({
        ...initialState,
        isOpen: !initialState.isOpen
      });
  });
});

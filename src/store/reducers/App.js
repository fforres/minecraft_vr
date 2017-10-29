// Actions
export const DUMMY_ACTION = 'mc/App/DUMMY_ACTION';

// Reducer
export const defaultState = {};

export default function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case DUMMY_ACTION: {
      return state;
    }
    default: return state;
  }
}

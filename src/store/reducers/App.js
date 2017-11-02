// Actions
export const ADD_BLOCK = 'mc/App/ADD_BLOCK';

// Reducer
export const defaultState = {
  blocks: new Map(),
};

export default function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case ADD_BLOCK: {
      const newMap = new Map(state.blocks);
      newMap.set(payload.id, {
        id: payload.id,
        position: {
          x: payload.position.x,
          y: payload.position.y,
          z: payload.position.z,
        },
        color: payload.color,
      });
      return {
        ...state,
        blocks: newMap,
      };
    }
    default: return state;
  }
}

export const addBlock = data => ({
  type: ADD_BLOCK,
  payload: {
    ...data,
    color: getRandomColor(),
  },
});


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

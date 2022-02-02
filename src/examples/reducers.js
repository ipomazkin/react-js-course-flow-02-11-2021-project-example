const SN_ADD_ONE = 'addOne';
const SN_REMOVE_ONE = 'removeOne';

function simpleNumberReducer(initialState = 0, action) {
  if (action === SN_ADD_ONE) {
    return initialState + 1;
  }
  if (action === SN_REMOVE_ONE) {
    return initialState - 1;
  }
  return initialState;
}

/***************************************************************************
 * IDs reducer
 ***************************************************************************/
const idsReducerInitialState = {
  ids: [],
};

const IDS_ADD_ID = 'IDS_ADD_ID';
const IDS_REMOVE_ID = 'IDS_REMOVE_ID';

const idsReducerActionExample = {
  type: IDS_ADD_ID,
  payload: {
    id: 0
  }
};

export function idsAddId(id) {
  return {
    type: IDS_ADD_ID,
    payload: {
      id,
    }
  }
}

export function idsRemoveId(id) {
  return {
    type: IDS_REMOVE_ID,
    payload: {
      id,
    }
  }
}

export function idsReducer(initialState = idsReducerInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case IDS_ADD_ID:
      return {
        ...initialState,
        ids: [...initialState.ids, payload.id]
      };

    case IDS_REMOVE_ID:
      return {
        ...initialState,
        ids: initialState.ids.filter((currentId) => currentId !== payload.id),
      };

    default:
      return initialState;
  }
}

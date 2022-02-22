// export const logger = store => next => action => {
//   console.log('on action dispatching', action, store.getState());
//   const result = next(action);
//   console.log('on action dispatched', action, store.getState());
//   return result;
// }

export const customLogger = store => next => action => {
  // console.log('on action dispatching', action, store.getState());
  const result = next(action);
  // console.log('on action dispatched', action, store.getState());
  return result;
};

export const think = store => next => actionOrCallback => {
  if (typeof actionOrCallback === "function") {
    const dispatch = store.dispatch;
    return actionOrCallback(dispatch);
  } else {
    const result = next(actionOrCallback);
    return next(actionOrCallback);
  }
};

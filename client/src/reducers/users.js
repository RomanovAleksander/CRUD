export const initialState = [
  {
   username: 'test'
  }
];

export const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    default:
      return state
  }
};

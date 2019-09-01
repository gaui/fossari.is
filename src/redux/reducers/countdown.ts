export const initialState: DateDetail = {} as DateDetail;

const countdownReducer = (
  state: DateDetail,
  action: { type: string; payload: DateDetail }
) => {
  switch (action.type) {
    case 'NEXT_TICK':
      return { ...state, ...action.payload };
    default: {
      throw new Error();
    }
  }
};

export default countdownReducer;

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return task.id !== action.payload;
        })
      };
    default:
      return state;
  }
};

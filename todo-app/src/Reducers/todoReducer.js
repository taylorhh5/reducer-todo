export const initialState = {
  list: [


    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }

  ]
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state, list: [...state.list, {

          item: action.payload,
          completed: false,
          id: Date.now()
        }]
      };

    case "NOW_COMPLETED":
      return {
        ...state,
        list: state.list.filter(todo =>
          !todo.completed)
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        list: state.list.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )

      }
   


    default:
      return state;
  }
};

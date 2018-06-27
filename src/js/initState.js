const todos = [
  {
    id: 1,
    completed: true,
    text: 'Task 1',
  },
  {
    id: 2,
    completed: false,
    text: 'Task 2',
  },
  {
    id: 3,
    completed: true,
    text: 'Task 3',
  },
  {
    id: 4,
    completed: true,
    text: 'Task 4',
  },
];

const todoState = {
  data: [],
  loading: false,
  errors: []
}

export const initialState = {
  todoState,
  filter: 'ALL',
};

// todos: {
//   data: [],
//   loading: booelan,
//   errors: []
// }
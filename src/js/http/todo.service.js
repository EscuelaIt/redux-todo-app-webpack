export async function getAllTodos() {
  try {
    const path = 'https://jsonplaceholder.typicode.com/todos';
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    return error;
  }
}
// state.js
// const state = {
//   // todoList: JSON.parse(localStorage.getItem('todoList')) || []
//   userId: ''
// }
let defaultUserId = ''
try {
  if (localStorage.userId) {
    defaultUserId = localStorage.userId
  }
} catch (e) {}

export default {
  userId: defaultUserId
}

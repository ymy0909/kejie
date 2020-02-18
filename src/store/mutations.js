export default {
  updateUserId (state, userId) {
    state.userId = userId
    try {
      localStorage.userId = userId
    } catch (e) {}
  }
}

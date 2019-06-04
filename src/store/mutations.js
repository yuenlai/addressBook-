export default {
  changeStudentId (state, userId) {
    state.userId = userId
    try {
      console.log(userId)
      localStorage.setItem('userId', JSON.stringify(userId))
    } catch (e) {
    }
  }
}

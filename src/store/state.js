
var defaultUserId = null

try {
  if (localStorage.getItem('userId')) {
    defaultUserId = localStorage.getItem('userId') // 从localStorage读之前的值（解决刷新页面，数据丢失问题）
  }
} catch (e) {
  console.log(e)
}

export default {
  userId: defaultUserId // 家长用户ID
}

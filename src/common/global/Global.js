let global = null
/**
 * 生产环境和测试环境的区分
 */
if (process.env.NODE_ENV === 'production') {
  let appid = 'wxf44c903e625902b7' // 正式
  let secret = 'c7cfe44d43fb45b19428844c83a8e6c4' // 正式
  // let appid = 'wxa4c70e55db4d2ab3' // 树德正式
  // let secret = 'af10e1b60784da5eaaf48ed329fb1c5a' // 树德正式
  let nodeserver = 'http://node.cdwtrj.com' // 正式
  let qyAppid = 'wxccf6f94a109a2280' // 正式
  let qySecret = 'j-e_czOd-3Kvayed02exxG_z969KQuXwai11amUWJiw' // 正式
  let qyAddressbookSecret = 'wL92QStpzX5Em8zMpJ37M5QA_mfILr1_VNy980ucir4'
  let addressUrl = 'http://growth-news.cdwtrj.com'
  global = {
    appid,
    secret,
    nodeserver,
    qyAppid,
    qySecret,
    qyAddressbookSecret,
    addressUrl
  }
} else {
  let appid = 'wx30d44dc3349ef7ca' // 测试
  let secret = '6e6e10ba0a03853d7d624f4e28d8988e' // 测试
  let nodeserver = 'http://report.cdwtrj.com' // 测试
  // let nodeserver = 'http://qanode.cdwtrj.com' // qa测试
  let qyAppid = 'wxccf6f94a109a2280' // 测试
  let qySecret = 'j-e_czOd-3Kvayed02exxG_z969KQuXwai11amUWJiw' // 测试
  global = {
    appid,
    secret,
    nodeserver,
    qyAppid,
    qySecret
  }
}
export default global

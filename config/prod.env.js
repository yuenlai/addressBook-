
'use strict'
let node_env = ''
if (process.env.npm_lifecycle_event == 'build:test') {
  //测试环境
  node_env = '"test"'
  console.log('test')
} else {
  node_env = '"production"'
  console.log('production')
}
module.exports = {
  NODE_ENV: node_env
}

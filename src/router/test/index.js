const Test = () => import(/* webpackChunkName: "parentaddressbook" */ '@/pages/test/Test01')

export default[
  {
    path: '/test01',
    name: 'Test',
    component: Test,
    meta: {
      title: '测试'
    }
  }
]

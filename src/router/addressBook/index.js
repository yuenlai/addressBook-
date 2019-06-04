const Test = () => import(/* webpackChunkName: "parentaddressbook" */ '@/pages/addressBook/AddressBook')

export default[
  {
    path: '/addressBook',
    name: 'AddressBook',
    component: Test,
    meta: {
      title: '通讯录'
    }
  }
]

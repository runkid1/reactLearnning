import home from '../pages/home/home'
import login from '../pages/user/login'

const routes=[
  {
    path:'/home',
    component:home,
    children:[]
  },
  {
    path:'/login',
    component:login,
    children:[]
  }
]
export default routes
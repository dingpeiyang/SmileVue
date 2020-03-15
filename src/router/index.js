import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Collects from '@/components/pages/Collects'
import Goods from '@/components/pages/goods'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
import Main from '@/components/pages/Main'
import Member from '@/components/pages/Member'
import Search from '@/components/pages/Search'
import Order from '@/components/pages/Order'
import HistoryTrail from '@/components/pages/HistoryTrail'
Vue.use(Router)

export default new Router({
  routes: [
   {path:'/main',name:'Main',component:Main,
      children:[
        {path:'/',name:'ShoppingMall',component:ShoppingMall},
        {path:'/CategoryList',name:'CategoryList',component:CategoryList},
        {path:'/Cart',name:'Cart',component:Cart},
        {path:'/Member',name:'Member',component:Member},
        {path:'/search',name:'Search',component:Search},
      ]
   },
   
   {path:'/register',name:'Register',component:Register},
   {path:'/order',name:'Order',component:Order},
   {path:'/login',name:'Login',component:Login},
   {path:'/collects',name:'Collects',component:Collects},
   {path:'/historyTrail',name:'HistoryTrail',component:HistoryTrail},
   {path:'/goods',name:'Goods',component:Goods},
   {path: "*", redirect: "/main"}   
  ]
})

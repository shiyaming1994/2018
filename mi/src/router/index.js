import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Cart from '../components/Cart.vue'
import Me from '../components/Me.vue'
import Details from '../components/details.vue'
import Search from '../components/search.vue'
import Settlement from '../components/Settlement.vue'
import Address from '../components/address.vue'
import Payment from '../components/Payment.vue'
import order from '../components/order.vue'
import nice from '../components/nice.vue'
import add from '../components/add.vue'

import Intelligence from '../components/home/Intelligence.vue'
import mint from '../components/home/mint.vue'
import Notebook from '../components/home/Notebook.vue'
import screen from '../components/home/screen.vue'
import television from '../components/home/television.vue'
import all from '../components/home/all.vue'
import box from '../components/home/box.vue'
import periphery from '../components/home/periphery.vue'




export default new Router({
  routes: [
  	{path:'',component:Home},
  	{name:'home',path:'/home',component:Home,children:[
      {path:'',component:mint},
      {path:'/Intelligence',component:Intelligence},
      {path:'/mint',component:mint},
      {path:'/Notebook',component:Notebook},
      {path:'/screen',component:screen},
      {path:'/television',component:television},
      {path:'/all',component:all},
      {path:'/box',component:box},
      {path:'/periphery',component:periphery}
    ]},
  	{name:'list',path:'/list',component:List},
  	{name:'cart',path:'/cart',component:Cart},
  	{name:'me',path:'/me',component:Me},
  	{name:'details',path:'/details',component:Details},
    {name:'search',path:'/search',component:Search},
    {name:'address',path:'/address',component:Address},
  	{name:'me.order',path:'/me/order',component:order},
    {name:'settlement',path:'/settlement',component:Settlement},
    {name:'nice',path:'/nice',component:nice},
    {name:'Payment',path:'/payment',component:Payment},
    {name:'add',path:'/add',component:add},
    { path: "*", redirect: '/home'}

    
  ]
})

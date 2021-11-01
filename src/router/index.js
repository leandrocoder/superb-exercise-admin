import Vue from 'vue'
import VueRouter from 'vue-router'
import CMS from '../views/CMS.vue'

import Bookings from '../views/cms/Bookings.vue'
import Reservation from '../views/cms/Reservation.vue'
import Settings from '../views/cms/Settings.vue'
import Tables from '../views/cms/Tables.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CMS',
    props: true,
    component: CMS,
    children: [
      {
        path: '/',
        redirect: 'bookings'
      },
      {
        path: 'bookings',
        props: route => ({ }),
        component: Bookings
      },
      {
        path: 'reservation',
        props: route => ({}),
        component: Reservation
      },
      {
        path: 'settings',
        props: route => ({}),
        component: Settings
      },
      {
        path: 'tables',
        props: router => ({}),
        component: Tables
      }
      
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {Login, Logout, People, Circles, Feed, Events, Profile } from '@/views'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      children: [

      ]
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/circles',
      name: 'Circles',
      component: Circles
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

  ]
})

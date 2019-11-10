import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/index.vue'
import labOverview from '../pages/pages1/index.vue'
import research from '../pages/pages2/index.vue'
import tutorTeam from '../pages/pages3/index.vue'
import training from '../pages/pages4/index.vue'
import stuPlace from '../pages/pages5/index.vue'
import download from '../pages/pages6/index.vue'

import introduce from '../pages/pages1/page_item/Introduce'
import announcement from '../pages/pages1/page_item/Announcement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: home,
      children: [
        {
          path: 'labOverview',
          name: 'labOverview',
          component: labOverview,
          children: [
            {
              path: 'introduce',
              name: 'introduce',
              component: introduce,
            },
            {
              path: 'announcement',
              name: 'announcement',
              component: announcement,
            },
            {
              path: 'news',
              name: 'news',
            },
            {
              path: 'report',
              name: 'report',
            },
            {
              path: 'honor',
              name: 'honor',
            },
            {
              path: 'cooperation',
              name: 'cooperation',
            },
            {
              path: 'contact',
              name: 'contact',
            },
          ]
        },
        {
          path: 'research',
          name: 'research',
          component: research,
          children: [
            {
              path: 'team',
              name: 'team',
            },
            {
              path: 'project',
              name: 'project',
            },
            {
              path: 'paper',
              name: 'paper',
            },
            {
              path: 'academic',
              name: 'academic',
            },
          ]
        },
        {
          path: 'tutorTeam',
          name: 'tutorTeam',
          component: tutorTeam,
          children: [
            {
              path: 'leader',
              name: 'leader',
            },
            {
              path: 'tutor',
              name: 'tutor',
            },
          ]
        },
        {
          path: 'training',
          name: 'training',
          component: training,
          children: [
            {
              path: 'education',
              name: 'education',
            },
            {
              path: 'degree',
              name: 'degree',
            },
          ]
        },
        {
          path: 'stuPlace',
          name: 'stuPlace',
          component: stuPlace,
          children: [
            {
              path: 'innovation',
              name: 'innovation',
            },
            {
              path: 'works',
              name: 'works',
            },
            {
              path: 'activity',
              name: 'activity',
            },
            {
              path: 'introduction',
              name: 'introduction',
            },
          ]
        },
        {
          path: 'download',
          name: 'download',
          component: download
        },
      ]
    },

  ]
})

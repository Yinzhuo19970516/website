import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/index.vue'
import lab_overview from '../pages/pages1/index.vue'
import reseach from '../pages/pages2/index.vue'
import tutor_team from '../pages/pages3/index.vue'
import training from '../pages/pages4/index.vue'
import stu_place from '../pages/pages5/index.vue'
import download from '../pages/pages6/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: home,
      children: [
        {
          path: 'lab_overview',
          name: 'lab_overview',
          component: lab_overview,
          children: [
            {
              path: 'intruduce',
              name: 'intruduce',
            },
            {
              path: 'announcement',
              name: 'announcement',
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
          path: 'reseach',
          name: 'reseach',
          component: reseach,
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
          path: 'tutor_team',
          name: 'tutor_team',
          component: tutor_team,
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
          path: 'stu_place',
          name: 'stu_place',
          component: stu_place,
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

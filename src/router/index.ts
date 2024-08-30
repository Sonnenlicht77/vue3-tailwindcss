import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/doc'
    },
    {
      path: '/doc',
      name: 'doc',
      redirect: '/doc/intro',
      component: () => import('../views/DocPage/index.vue'),
      children: [
        {
          path: '/doc/intro',
          name: 'intro',
          component: () => import('../views/DocPage/IntroPage/index.vue')
        },
        {
          path: '/doc/install',
          name: 'install',
          component: () => import('../views/DocPage/InstallPage/index.vue')
        },
        {
          path: '/doc/basis',
          name: 'basis',
          component: () => import('../views/DocPage/BasisPage/index.vue')
        },
        {
          path: '/doc/accessibility',
          name: 'accessibility',
          component: () => import('../views/DocPage/AccessibilityPage/index.vue')
        },
        {
          path: '/doc/plugins',
          name: 'plugins',
          component: () => import('../views/DocPage/PluginsPage/index.vue')
        },
        {
          path: '/doc/summary',
          name: 'summary',
          component: () => import('../views/DocPage/SummaryPage/index.vue')
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogPage/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/DemoPage/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/NotFoundPage/index.vue')
    }
  ]
})

export default router

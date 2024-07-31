
import { createRouter, createWebHistory, createWebHashHistory, useRoute } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import NotfoundView from '../views/NotfoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      redirect: { name: 'home' },
    },
    {
      path: '/about',
      name: 'about',
      alias: '/aboutus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      // beforeEnter: (to, from) => {
      //   console.log(to.query)
      //   if (Object.keys(to.query).length) return { path: to.path, query: {} };
      // },
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
    },
    {
      path: '/users/:userId',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      props: (route) => ({
        userId: route.params.userId,
        first_name: 'John',
        last_name: 'Doe',
      }),
      children: [
        {
          path: 'profile',
          component: ProfileView,
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotfoundView },
  ]
})

router.beforeEach((to, from) => {
  const isAuthenticated = true;

  if (to.meta.requiresAuth && !isAuthenticated && to.name !== 'home') {
    return { name: 'home' };
  }
});

export default router;
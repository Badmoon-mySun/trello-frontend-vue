import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    redirect: '/login',
    component: () => import('../views/auth/Auth.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
        meta: {
          title: 'Login',
          // metaTags: [
          //   {
          //     property: 'google-signin-client_id',
          //     content: '####'
          //   }
          // ],
        },
      },
      {
        path: '/registration',
        name: 'Registration',
        component: () => import('../views/auth/Registration.vue')
      }
    ]
  },
  {
    path: '/board/:boardId',
    name: 'Board',
    component: () => import('../views/Board.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// // This callback runs before every route change, including on page load.
// router.beforeEach((to, from, next) => {
//   // This goes through the matched routes from last to first, finding the closest route with a title.
//   // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
//   // `/nested`'s will be chosen.
//   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
//
//   // Find the nearest route element with meta tags.
//   const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
//
//   const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
//
//   // If a route with a title was found, set the document (page) title to that value.
//   if(nearestWithTitle) {
//     document.title = nearestWithTitle.meta.title;
//   } else if(previousNearestWithMeta) {
//     document.title = previousNearestWithMeta.meta.title;
//   }
//
//   // Remove any stale meta tags from the document using the key attribute we set below.
//   Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
//
//   // Skip rendering meta tags if there are none.
//   if(!nearestWithMeta && !nearestWithScript) return next();
//
//   // Turn the meta tag definitions into actual elements in the head.
//   nearestWithMeta.meta.metaTags.map(tagDef => {
//     const tag = document.createElement('meta');
//
//     Object.keys(tagDef).forEach(key => {
//       tag.setAttribute(key, tagDef[key]);
//     });
//
//     // We use this to track which meta tags we create so we don't interfere with other ones.
//     tag.setAttribute('data-vue-router-controlled', '');
//
//     return tag;
//   }).forEach(tag => document.head.appendChild(tag)); // Add the meta tags to the document head.
//
//   next();
// });

export default router

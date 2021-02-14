import SecureLS from "secure-ls";
let ls = new SecureLS({ isCompression: false });

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
// export default async (/* { app, router, Vue ... } */) => {
// something to do
// }

const router_guard = ({ router }) => {

  router.beforeEach((to, from, next) => {

    let logado = ls.get('kgi') == 'true';

    if (from.path == to.path && from.path == '/') {
      next('/');
      return;
    }

    if (to.matched.some(route => route.meta.requiresAuth)) {
      if (!logado) {
        next('/')
      } else {
        next()
      }
    } else {
      next()
    }    

  });

}

export default router_guard;

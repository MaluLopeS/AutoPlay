const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/MenuClientes', component: () => import('src/pages/MenuClientes.vue') },
      { path: '/ListagemVeiculos', component: () => import('src/pages/ListagemVeiculos.vue') },
      { path: '/ListagemTécnico', component: () => import('src/pages/ListagemTecnico.vue') },
      { path: '/MapaLocalização', component: () => import('src/pages/MapaLocalizacao.vue') }
    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/LoginLayout'),
    children: [
      { path: '', component: () => import('src/pages/Login.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

import layouts from '../../layouts'

export default {
  path: 'example',
  component: layouts.getAuthorizedLayout(),
  children: [
    {
      path: 'default',
      name: 'example-default',
      component: () => import('./default/index.vue'),
      meta: { pageTitle: 'example page', hideBreadcrumb: true }
    }
  ]
}

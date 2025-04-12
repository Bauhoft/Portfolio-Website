
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 680, hash: '88ab15794932763912b227319a654eeda03793bf74c2d854c6fca46deb9f51cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '54af1b5651fedd41f08a9f370ae3abcd611eefaf567a0d9a2e9c08e004b3fe63', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4876, hash: '60f3708e86e6fb77fc5f39984809f7ee17bafad1e0a7dabe9bdda2c15655ce4c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-VK2QMLJW.css': {size: 349119, hash: 'eYgleo4eMuk', text: () => import('./assets-chunks/styles-VK2QMLJW_css.mjs').then(m => m.default)}
  },
};

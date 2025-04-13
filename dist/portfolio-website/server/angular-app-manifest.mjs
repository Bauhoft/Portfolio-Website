
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/https://github.com/Bauhoft/Portfolio-Website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://github.com/Bauhoft/Portfolio-Website/home",
    "route": "/https:/github.com/Bauhoft/Portfolio-Website"
  },
  {
    "renderMode": 2,
    "route": "/https:/github.com/Bauhoft/Portfolio-Website/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 725, hash: 'b43875ad0b93e76efe02c6aec986f21e741903416ccf9d49167797396f9a2296', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: 'bf0825f4d986b433b1bb6d77be713d165f31b895bee5f6a77ecfa2e41dd92128', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'https:/github.com/Bauhoft/Portfolio-Website/home/index.html': {size: 901, hash: '341aff9dc13f6a1412fe1373e91af6b3e79ad6888feced387c73fc55fa5825ff', text: () => import('./assets-chunks/https:_github_com_Bauhoft_Portfolio-Website_home_index_html.mjs').then(m => m.default)},
    'styles-VK2QMLJW.css': {size: 349119, hash: 'eYgleo4eMuk', text: () => import('./assets-chunks/styles-VK2QMLJW_css.mjs').then(m => m.default)}
  },
};

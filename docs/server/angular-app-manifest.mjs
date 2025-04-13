
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-Website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio-Website/home",
    "route": "/Portfolio-Website"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Website/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 698, hash: '77b64b111c1f62729653e2ce469c4ff1785dbda505ca486f58f7d107b14bd98d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '63d6602fffe216e0254de7c004543a1ff8c42c51d5df6c9eb6c9d363c8d3340e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4894, hash: '6271d6dde866d1be39a87b57df41c3eabf93671938dbe0080776d8af85462630', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-VK2QMLJW.css': {size: 349119, hash: 'eYgleo4eMuk', text: () => import('./assets-chunks/styles-VK2QMLJW_css.mjs').then(m => m.default)}
  },
};

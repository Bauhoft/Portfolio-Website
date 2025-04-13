
export default {
  basePath: '/https://github.com/Bauhoft/Portfolio-Website',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

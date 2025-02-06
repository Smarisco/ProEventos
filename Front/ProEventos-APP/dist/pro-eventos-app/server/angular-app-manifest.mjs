
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5863, hash: '1e6536e7bff051eed85d45260f8331e9760d8b3b93d7a93f605e8aa96ebfcf21', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '0d595430d3e13f15cf525e414b00f1d491895ea8d8cf4da127f63a77e48b215d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28299, hash: '94b91c4da5f615d3a09f0f3b1a5a99a276e48599a79bb54e21f4240dad29fd21', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UNHDHM23.css': {size: 323985, hash: 'VJtlWBK8QHk', text: () => import('./assets-chunks/styles-UNHDHM23_css.mjs').then(m => m.default)}
  },
};

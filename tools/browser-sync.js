var bs = require('browser-sync');

bs({
  server: './dist',
  files: './dist/app.*',
  reloadDelay: 100,
  ui: false,
  open: false,
  notify: false
});
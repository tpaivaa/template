var koa = require('koa');
var app = koa();
var root = 'public';
var opts = '';
app.use(require('koa-static')(root, opts));

app.listen(3000);

console.log('listening on port 3000');
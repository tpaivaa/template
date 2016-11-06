var koa = require('koa');
var json = require('koa-json');
var root = 'public';
var router = require('koa-router')();
var serve = require('koa-static');
var opts = '';
var app = koa();

app.use(json());
app.use(serve(__dirname + '/public'));
app
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/', serve(root,opts));

router.get('/json', function *(next) {
	this.body = { connected: 'OK', routed: 15, unawailable: 120};
});

app.listen(3000);

console.log('listening on port 3000');


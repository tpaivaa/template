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
	this.body = { connected: 1000, busy: 15, unavailable: 120, else: 190, waitTime:'00:01:00', onQue: 250, serviceQuality: 98};
});

app.listen(3000);

console.log('listening on port 3000');


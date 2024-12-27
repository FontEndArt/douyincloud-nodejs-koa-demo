import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router'

const app = new Koa();

const router = new Router();
router.get('/', ctx => {
    ctx.body = `Nodejs koa demo project`;
})

app.use(bodyParser());
app.use(router.routes());

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
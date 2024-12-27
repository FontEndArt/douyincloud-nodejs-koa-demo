import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router'

const app = new Koa();

const router = new Router();
router.get('/', ctx => {
    ctx.body = `Nodejs koa demo project`;
}).get('/t', ctx => {
    const { url } = ctx.query; // 获取查询参数中的 url
    if (typeof url === 'string') {
        ctx.redirect(url); // 跳转到指定的 URL
    }
})

app.use(bodyParser());
app.use(router.routes());

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
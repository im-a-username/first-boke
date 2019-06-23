const express = require('express');
const app = express();
//  引入 解析数据的 第三方 模块 
const bodyParser = require('body-parser');
// 设置默认采用的模板引擎，名称
app.set('view enginne', 'ejs');
// 这是模板页面存放的路径 
app.set('views', './views');

// 注册中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 请求静态托
app.use('/node_modules', express.static('./node_modules'));

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'zs', age: 22 });
});

// 用户请求是注册页面
app.get('/register', (req, res) => {
    // 注意 ： 当在调用模板引擎的res.render函数的时候 ./ 相对路径 是相对于 views下面的路径
    res.render('./user/register.ejs', {});
});

// 用户请求的是登录页面
app.get('/login', (req, res) => {
    res.render('./user/login.ejs', {});
});

app.post('/register', (req, res) => {
    /*
        1.接收前端发送来的post请求信息 
        2.对前端发送的参数进行 解析 
        3.对参数 进行校验， 合法性、 重复性
        4. 往数据库中添加用户名 如果成功 就给一个成功提示 反则给一个错误提示

    */
    const body = req.body;
    console.log(body);
    // 完成用户注册的逻辑
    res.send({ msg: 'ok', status: 200 });
});

app.listen(3000, () => {
    console.log('running...');
});
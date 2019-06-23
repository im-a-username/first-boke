const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//  引入 解析数据的 第三方 模块 
const bodyParser = require('body-parser');

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
    // 设置模板页面的存放路径
app.set('views', './views')

// 注册中间件
app.use(bodyParser.urlencoded({ extended: false }))

// 请求静态托管
app.use('/node_modules', express.static('./node_modules'))


// // 导入被抽离出来的没有用户的路由
// const router1 = require('./router/index.js')
// app.use(router1);
// // 导入被抽离的用户逻辑代码的 路由 
// const router2 = require('./router/user.js')
// app.use(router2);


// 使用循环的的方式 进行路由的自动注册    filenames 是当前文件下所有文件的一个集合
fs.readdir(path.join(__dirname, './router'), (err, filenames) => {
    if (err) return console.log('读取router目录中的路由失败！');
    // 循环router目录下的每一个文件名
    filenames.forEach(fname => {
        // 没循环一次 ， 拼接处一个完整的 路由模块 地址
        // 然后，使用 require 导入这个路由模块 
        const router = require(path.join(__dirname, './router', fname));
        app.use(router);
    });
});
app.listen(3000, () => {
    console.log('running...');
});
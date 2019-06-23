const express = require('express');
const app = express();
// 设置默认采用的模板引擎，名称
app.set('view enginne', 'ejs');
// 这是模板页面存放的路径 
app.set('views', './views');
// 请求静态托管
app.use('/node_modules', express.static('./node_modules'));
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'zs', age: 22 });
})
app.listen(3000, () => {
    console.log('running...');
});
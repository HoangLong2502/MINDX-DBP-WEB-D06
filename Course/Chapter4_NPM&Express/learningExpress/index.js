const express = require('express');
const app = express();
const port = 3002;
const mangaRouter = require('./router/mangaRouter');

app.use(express.json());
// Đảm bảo dữ liệU trả về dạng json
app.use('/api/manga', mangaRouter);

// app.get('/user/:id', (req, res) => {
//     res.send('Hello user !!!');
// });

app.listen(port, () => {
    console.log('express example listening at port 3002')
});
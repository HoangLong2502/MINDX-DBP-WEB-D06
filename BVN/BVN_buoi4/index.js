const express = require('express');
const userRouter = require('./router/userRouter');
const app = express();

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(3002, () => {
    console.log('express listening at 3003')
});
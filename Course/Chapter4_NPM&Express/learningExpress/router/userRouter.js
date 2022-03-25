const express = require('express');
const userRouter = express.Router();

// CRUD with user
// express validator
// joi.dev/api
const isers = [
    {
        id: '1',
        age: 18, // chỉ nhận là số từ 1-200, không nhận số âm
        email: '0912002325a@gmail.com', // chỉ nhân email
        name: 'Le Ba Hoang Long',
        gender: 0 // 0: name, 1: nữ, 2: 0ther. Chỉ được nhập vào 0,1,2
    }
]

// handling user /api/user
// GET locolost:3002/api/user -> tra ve danh sach user tren man hinh
// GET by id
// POST localhost:3002/api/user {id, name:} -> them user moi vao array (postman) va tra ve danh sach moi
// PUT localhost:3002/api/user {id, name} -> Cap nhat user nao do
    // validate nếu ID không tồn tại
// DELETE localhost:3002/api/user {id} -> Xoa 1 user ra khoi mang
    // validate nếu ID không tồn tại

module.exports = userRouter;
const express = require('express');

const mangaRouter = express.Router();

// Định nghĩa danh sách các quyển manga
// fix cứng data vì chưa học mongoDB;

const mangas = [
    {id: '1', name: 'Bay vien ngo rong'},
    {id: '2', name: 'Tham tu lung danh conan'},
    {id: '3', name: 'Doraemon'},
    {id: '10', name: 'Doraemon2'},
]

// handling manga
// GET locolost:3002/ -> tra ve danh sach mnanga tren man hinh
// POST localhost:3002/ {id, name:} -> them quyen truyen moi vao array (postman) va tra ve danh sach moi

mangaRouter.get('/', function(req, res) {
    res.send(mangas);
});

// Tạo 1 quyển truyện mới
mangaRouter.post('/', function(req, res) {
    const newManga = {
        id: `${mangas.length + 1}`,
        // hiển thi dạng string
        name: req.body.name,
    };
    mangas.push(newManga);
    res.send(mangas);
})

module.exports = mangaRouter;
const express = require('express');
const { body, validationResult } = require('express-validator');
const userRouter = express.Router();

const users = [
    {
        id: '1',
        age: 18,
        email: '0912002325a@gmail.com',
        name: 'Le Ba Hoang Long',
        gender: 0,
    }
]

// GET
userRouter.get('/', (req, res) => {
    res.send(users);
});

// GET by id
userRouter.get('/:id', (req, res) => {
    let id = req.params.id;

    let index = users.findIndex((user) => {
        return (user.id == Number.parseInt(id))
    });
    
    if(index >= 0 && index < users.length) {
        let user = users[index];
        res.json(user)
    } else {
        res.status(404)
    }
});

// POST
userRouter.post(
    '/post',
    body('age').custom((value, {req}) => {
        if(value < 1 || value > 200) {
            throw new Error('Nhập tuổi trong khoảng từ 1 đến 200')
        }
        return true
    }),
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('name').isLength({ min: 5 }),
    body('gender').custom((value, {req}) => {
        if(value == 0) {
            return value = "Nam"
        };
        if(value == 1) {
            return value = "Nu"
        };
        if(value == 2) {
            return value = "khong xac dinh"
        }
        else {
            throw new Error('0: name, 1: nữ, 2: 0ther. Chỉ được nhập vào 0,1,2')
        }
    }),
    (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const newUser = {
          id: `${users.length + 1}`,
          age: req.body.age,
          email: req.body.email,
          name: req.body.name,
          gender: req.body.gender,
      }
      users.push(newUser);
      res.send(users);
    },
);

// PUT
userRouter.put('/put/:id',

    body('age').custom((value, {req}) => {
        if(value < 1 || value > 200) {
            throw new Error('Nhập tuổi trong khoảng từ 1 đến 200')
        }
        return true
    }),
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('name').isLength({ min: 5 }),
    body('gender').custom((value, {req}) => {
        if(value == 0) {
            return value = "Nam"
        };
        if(value == 1) {
            return value = "Nu"
        };
        if(value == 2) {
            return value = "khong xac dinh"
        }
        else {
            throw new Error('0: name, 1: nữ, 2: 0ther. Chỉ được nhập vào 0,1,2')
        }
    }),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        };

        let id = req.params.id;
        let age = req.body.age;
        let email = req.body.email;
        let name = req.body.name;
        let gender = req.body.render;

        let index = users.findIndex((user) => {
            return (user.id == Number.parseInt(id))
        });

        if(index >= 0 && index <= users.length) {
            let user = users[index];
            user.age = age;
            user.email = email;
            user.name = name;
            user.gender = gender;
            res.json(user);
        } else {
            res.status(404);
        }
    },
);

// DELETE
userRouter.delete('/delete/:id', (req, res) => {
    let id = req.params.id;

    let index = users.findIndex((user) => {
        return (user.id == Number.parseInt(id))
    });

    if(index >= 0 && index <= users.length) {
        let user = users[index];
        users.splice(index, 1);
        res.json(user)
    }
    else {
        res.status(404);
    }

    for(let i = index; i < users.length; i++) {
        users[i].id = users[i].id - 1;
    }

    res.send(users);
})

module.exports = userRouter;

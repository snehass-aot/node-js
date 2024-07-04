var jwt = require('jsonwebtoken');
const users = [];
const secretKey = "my-secret-key";
const { v4: var_uuid } = require('uuid');



const registerPage = (req, res) => {
    const { username, password, fullName, phone, email } = req.body;
    const id = var_uuid();
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ error: 'Username already exists' });
    } else {
        const newUser = { id, username, password, fullName, phone, email };
        users.push(newUser);
        res.json(newUser);
    }
};



const postLogin = (req, res) => {
    const data = req.body;
    const user = users.find(user => user.username === data.username && user.password == data.password);
    if (user) {
        var token = jwt.sign({ id:user.id, username: user.username }, secretKey);
        res.json({ "Your token": token });
    } else {
        return res.status(400).json({ error: 'Username or password is incorrect' });
    }
};





module.exports = {registerPage,postLogin};
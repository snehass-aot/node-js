const { v4: uuidv4 } = require('uuid'); // import uuid

const list = [];
const getData = (req, res) => {
    res.json(list);
}
const getOnetask = (req, res) => {
    const id = req.params.id;
    const task = list.find((task) => task.id == id);
    if (!task) {
        return res.status(400).json({ message: 'Task not exists' });
    }
    res.json(task);
}

const postData = (req, res) => {
    const { title, description } = req.body;
    const id = uuidv4(); // generate a unique ID
    const taskExists = list.find(task => task.id === id);
    if (taskExists) {
        return res.status(400).json({ message: 'Task with this ID already exists' });
    }
    if (!title || !description) {
        return res.status(400).json({ message: 'Please fill all the fields' });
    }
    const newTask = { id, title, description };
    list.push(newTask);
    res.json(list);
};



const putData = (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    const task = list.find((task) => task.id == id);
    if (!task) {
        return res.status(400).json({ message: 'Task not exists' });
    }
    task.title = title;
    task.description = description;
    res.json(task);
}
const deleteData = (req, res) => {
    const id = req.params.id;
    const taskIndex = list.findIndex(task => task.id == id);
    if (taskIndex === -1) {
        return res.status(400).json({ message: 'Task does not exist' });
    }
    const task = list.filter((task) => task.id != id);
    res.json(task);
}
module.exports = { getData, getOnetask, postData, putData, deleteData }
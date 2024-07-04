const tasks = [];


const taskCreate =(req,res) => {
    const { taskTitle,taskDescription} = req.body;
    const id = req.user.id;
    const task = { id, taskTitle, taskDescription };
    tasks.push(task);
    res.json(task);
}



const getTask =(req,res) => {
    const id = req.user.id;
    const task = tasks.filter(task => task.id === id);
    res.json(task);
}


module.exports = {taskCreate,getTask};

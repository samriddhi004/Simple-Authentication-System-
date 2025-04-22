const db = require('../config/db');
const getTasks = async(req,res) =>{
    try{
        const [tasks] = await db.query('SELECT * FROM tasks WHERE user_id = ?', [req.user.id]);
        res.json(tasks);
    } catch(err) {
        res.status(500).json({error : err.message});
    }
};

const addTask = async (req,res) =>{
    const {title, description} = req.body;
    try{
        await db.query('INSERT INTO tasks (user_id, title, description) VALUES (?,?,?)',[
            req.user.id, title, description
        ]);
        res.status(201).json({message: "Task added successfully"});
} catch(err) {
    res.status(500).json({error: err.message});
}
};

const deleteTask = async(req,res) => {
    const taskId = req.params.id;
    try{
        await db.query('DELETE FROM tasks WHERE id = ?',[taskId, req.user.id]);
        res.json({message: 'Task deleted successfully'});
    } catch (err){
        res.status(500).json({error : err.message});
    }
};

module.exports = {getTasks, addTask, deleteTask};


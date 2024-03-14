const db = require('./db_service');

function getTasks() {
    return db.query('SELECT * FROM tasks');
}

function getTask(id) {
    return db.query('SELECT * FROM tasks WHERE id = ?', [id]);
}

function createTask(task) {
    return db.query('INSERT INTO tasks SET ?', task);
}

function updateTask(id, task) {
    return db.query('UPDATE tasks SET ? WHERE id = ?', [task, id]);
}

function deleteTask(id) {
    return db.query('DELETE FROM tasks WHERE id = ?', [id]);
}

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
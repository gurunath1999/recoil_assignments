

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { activeTaskState, completeTaskState } from './atom';


function Main2() {
    const [activeTasks, setActiveTasks] = useRecoilState(activeTaskState);
    const [completedTasks, setCompletedTasks] = useRecoilState(completeTaskState);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setActiveTasks([...activeTasks, { id: Date.now(), text: newTask, isCompleted: false }]);
            setNewTask('');
        }
    };

    const completeTask = (taskId) => {
        const task = activeTasks.find((t) => t.id === taskId);
        setActiveTasks(activeTasks.filter((t) => t.id !== taskId));
        setCompletedTasks([...completedTasks, { ...task, isCompleted: true }]);
    };

    const removeTask = (taskId, isCompleted) => {
        if (isCompleted) {
            setCompletedTasks(completedTasks.filter((t) => t.id !== taskId));
        } else {
            setActiveTasks(activeTasks.filter((t) => t.id !== taskId));
        }
    };

    return (
        <div>
            <h3>To-Do List</h3>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="New task..." 
            />
            <button onClick={addTask}>Add Task</button>

            <h4>Active Tasks</h4>
            <ul>
                {activeTasks.map((task) => (
                    <li key={task.id}>
                        <input 
                            type="checkbox" 
                            onChange={() => completeTask(task.id)} 
                        />
                        {task.text}
                        <button onClick={() => removeTask(task.id, false)}>Remove</button>
                    </li>
                ))}
            </ul>

            <h4>Completed Tasks</h4>
            <ul>
                {completedTasks.map((task) => (
                    <li key={task.id}>
                        <input 
                            type="checkbox" 
                            checked 
                            readOnly 
                        />
                        {task.text}
                        <button onClick={() => removeTask(task.id, true)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main2;

import React, { useState } from "react";


export default function ToDoList(){
    const [tasks, setTasks] = useState([]);
    function addtask() {
        const taskInput = document.getElementById("taskin");
        const taskText = taskInput.value;

        taskInput.value = "";

        setTasks(prevTasks => [...prevTasks, taskText]);

    }

    return(
        <>
            <h3>To-Do List</h3>
            <input id="taskin" type="text" placeholder="Add a Task"></input>
            <button onClick={addtask}>Add Task</button>
            
            
            
        </>
    )
}

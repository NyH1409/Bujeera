import { CreateTask, Task } from "@/utils/type";
import { create } from "zustand";
export const useProvider = create((set)=>({
    tasks : [],
    task : {},
    createTask : (data:CreateTask)=>{
        const toCreate:Task = {
            id: Date.now().toString(),
            title: data.title,
            description: data.description
        }

        localStorage.setItem(Date.now().toString(), JSON.stringify(toCreate))
    },
    getTasks : ()=>{
        let tasksNumber = localStorage.length;
        let tasksFromStorage = [];
        for (let index = 0; index < tasksNumber; index++) {
            const taskId = localStorage.key(index)
            const task = localStorage.getItem(taskId);
            
            tasksFromStorage.push(JSON.parse(task))
        }
        
        set({ tasks: tasksFromStorage })
    },
    getTaskById: (taskId: string)=>{
        const task = localStorage.getItem(taskId)
        set({ task: JSON.parse(task) })
    },
    deleteTask: (taskId:string)=>{
        localStorage.removeItem(taskId)
    },
    updateTask : (task:Task)=>{
        localStorage.setItem(task.id, JSON.stringify(task))
    }
}))
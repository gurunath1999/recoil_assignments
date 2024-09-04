import { atom } from "recoil";

export const activeTaskState=atom({
    key:'activeTask',
    default:[]
})

export const completeTaskState=atom({
    key:'completeTask',
    default:[]
})

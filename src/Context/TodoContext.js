import React, { createContext, useState, useEffect } from 'react';
export const TodoContext = createContext();


export default function TodoProvider({ children }) {
    const [todoArr, setTodoArr] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoArr));
    }, [todoArr]);

    function addTodo(item){
        setTodoArr([...todoArr,item]);
    }

    function toggleComplete(id,val){
        setTodoArr(todoArr.map((e)=>{
            if(e.id===id){
                return{...e,completed:val}
            }else{return e};
        }))
    }

    function deleteTodo(id){
        setTodoArr(todoArr.filter((e)=>{
            if(e.id!==id){
                return e;
            }
        }))
    }

    function updateTodo(id,text){
        setTodoArr(todoArr.map((e)=>{
            if(e.id===id){
                return {...e,todoMsg:text};
            }
            else{
                return e;
            }
        }))
    }


    return(
        <TodoContext.Provider value={{addTodo,todoArr,toggleComplete,deleteTodo,updateTodo}} >
            {children}
        </TodoContext.Provider>
    )
}


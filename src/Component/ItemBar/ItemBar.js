import React, { useContext, useState,useRef } from "react";
import './ItemBarCss.css';
import { TodoContext } from "../../Context/TodoContext";


export default function ItemBar() {
    const {todoArr,toggleComplete,deleteTodo,updateTodo} = useContext(TodoContext);
    const [text,setText]=useState('');
    const [isEdit,setIsEdit]=useState(false);
    const [editId,setEditId]=useState(null);
    function handleCheck(id,val){
        toggleComplete(id,val);
    }
    function handleDelete(id){
        deleteTodo(id);
    }
    function handleUpdate(){
        updateTodo(editId,text);
        setText('');
        setEditId(null);
        setIsEdit(false);
    }
    function handleEdit(id,currentMsg){
        setEditId(id);
        setIsEdit(true);
        setText(currentMsg)
    }
   
    return (
        <div className="item-container">
            {
                todoArr.map((e) => {
                    

                    return (
                        <div key={e.id}  className={`all-holder ${e.completed?'complete':''} `} >
                            {console.log(e.completed)}
                            <div className="li-check-holder" >
                                <input type="checkbox" className="checkBox" id={e.id}  onChange={(i) => {
                                        let val=i.target.checked;
                                        handleCheck(e.id,val);
                                }} />
                                {
                                    isEdit&&e.id===editId?
                                    <textarea type="text" className="first-item edit-item" value={text}  onChange={(e)=>{setText(e.target.value)}} onKeyDown={(e)=>{if(e.key==='Enter'){handleUpdate()}}} autoFocus />
                                    :
                                    <textarea type="text" className="first-item" value={e.todoMsg} readOnly />
                                }
                                
                            </div>
                            <div className="emoji-holder">
                                {isEdit&&e.id==editId?
                                <button className="icon-button icon-pencil" onClick={()=>{handleUpdate(e.id,text)}} >{"✅"}</button>
                                :
                                <button className="icon-button icon-pencil" onClick={()=>{handleEdit(e.id,e.todoMsg)}}  >{"✏️"}</button>
                                }
                                
                                <button onClick={()=>{handleDelete(e.id)}} className="icon-button icon-cross" >{"❌"}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
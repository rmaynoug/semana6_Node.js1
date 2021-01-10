import React from 'react';
import './styles.css';
import Checkbox from "../Checkbox";
import todosRepository from './../../infrastructure/todosRepository';

const Todo = (prop) => {
    const todo = prop.todo;

    const handleDoing = async () => {

    if (todo.status === 'doing') {
    await todosRepository.patchTodo(todo.id, {status: 'to_do'});
        } else {
        await todosRepository.patchTodo(todo.id, {status: 'doing'});
        }
        props.changedState();
      }

    const handleCompleted = async () => {

    if (todo.status === 'finished') {
      await todosRepository.patchTodo(todo.id, {
        status: 'to_do',
        completed: false,
        completion_date: '',
      });
    } else {

      await todosRepository.patchTodo(todo.id, {
         status: 'finished',
         completed: true,
         completion_date: Date.now()
      });
    }
    props.changedState();
  };

    return (
        <div className="todo">
        <div className="row">
        <div className="name">{todo.name}</div>
        <div className="owner">{todo.owner}</div>
        </div>
        <div className="description">{todo.description}</div>
        <div className="row">
            <Checkbox changeState ={ handleDoing} value={todo.status === 'doing'} label ="Doing"/>
            <Checkbox changeState ={ handleCompleted} value={todo.status === 'finished'} label = "Completed"/>
            
            </div>
     </div>   
    )
}

export default Todo;
import React, {useEffect,useState} from "react";
import './App.css';
import CreateTodo from "./components/CreateTodo";
import ListOfTodos from "./components/ListOfTodos";
import todosRepository from "./infrastructure/todosRepository";


function App() {

  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {
    todosRepository.getTodos().then((response) => {
      setListOfTodos(response);
    });
  }, []);


  const changedState = async () => {
    await todosRepository.getTodos().then ((response) => {
      setListOfTodos(response);
  
     });

  }

  return(

    <div className="App">
        <CreateTodo/>
        <ListOfTodos changedState={changedState} todos = {ListOfTodos.filter((todo) => todo.status === 'to_do')} title="TO DO"/>
        <ListOfTodos changedState={changedState} todos = {ListOfTodos.filter((todo) => todo.status === 'doing')} title="DOING"/>
        <ListOfTodos changedState={changedState} todos = {ListOfTodos.filter((todo) => todo.status === 'finished')} title="FINISHED"/>
      

    </div>
  
  );
}

export default App;

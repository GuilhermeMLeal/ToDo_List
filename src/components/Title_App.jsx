import React, { useState, useEffect } from "react";
import './Title_App.module.css'

const TodoList = () => {
  // Estado para armazenar as tarefas
  const [todos, setTodos] = useState([]);
  
  // Estado para a nova tarefa a ser adicionada
  const [newTodo, setNewTodo] = useState("");

  // Efeito para carregar as tarefas salvas no localStorage ao iniciar
  useEffect(() => {
    // Recupera as tarefas do localStorage ou inicializa como array vazio
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    
    // Atualiza o estado 'todos' com as tarefas recuperadas
    setTodos(storedTodos);
  }, []);

  // Efeito para salvar as tarefas no localStorage sempre que 'todos' é atualizado
  useEffect(() => {
    // Converte as tarefas para JSON e salva no localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Função para adicionar uma nova tarefa à lista
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      // Adiciona a nova tarefa ao estado 'todos' e limpa o campo de entrada
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  // Função para remover uma tarefa da lista
  const handleDeleteTodo = (index) => {
    // Cria uma cópia do array de tarefas, remove a tarefa na posição 'index' e atualiza o estado 'todos'
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Função para alternar o status de concluído de uma tarefa na lista
  const handleToggleTodo = (index) => {
    // Cria uma cópia do array de tarefas, inverte o status de concluído da tarefa na posição 'index' e atualiza o estado 'todos'
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  // Renderiza o componente
  return (
    <div className="TitleApp_CSS">
      <div className="TitleApp">
        <h1>To-Do List</h1>
        <h3>Monte sua lista de tarefas diárias aqui!!</h3>
      </div>
      
      
      {/* Campo de entrada para adicionar novas tarefas */}
      <input 
        className="inputText"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {/* Botão para adicionar uma nova tarefa */}
      <button onClick={handleAddTodo}>Add</button>
      {/* Lista de tarefas */}
      <ul>
        {/* Mapeia sobre as tarefas para exibir cada uma delas */}
        {todos.map((todo, index) => (
          <li
            key={index}
            className="listItens"
          >
            {/* Checkbox para marcar/desmarcar como concluído */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              {/* Texto da tarefa com estilo condicional baseado no status de concluído */}
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            {/* Botão para excluir a tarefa */}
            <button
              
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporta o componente TodoList
export default TodoList;

import React, { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState(""); // Use "newItem" em vez de "todo"
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert('Enter an item');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000), // Corrija "math" para "Math"
      value: newItem
    };

    setItems(oldList => [...oldList, item]); // Corrija "items" para "item"
    setNewItem(''); // Corrija "setTodo" para "setNewItem"
  }
  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  }

  return (
    <div className='app'>
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder='Add an item...'
        value={newItem} // Use "newItem" em vez de "todo"
        onChange={change => setNewItem(change.target.value)} // Corrija a função de callback
      />
      <button onClick={addItem}>Add</button> {/* Adicione um botão para adicionar */}
      <ul>
        {items.map(item=>{
          return(
            <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}></button></li>
          )
        })}
      </ul>  
    </div>

    
  );
}

export default App;


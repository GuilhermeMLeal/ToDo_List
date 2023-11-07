import React, { useState } from 'react';
import TitleApp from './components/Title_App';
import PropTypes from 'prop-types'


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
      <TitleApp />

      <input
      className='InputTag'
        type="text"
        placeholder='Adicione um item aqui...'
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


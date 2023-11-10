import React, { useState } from 'react';
import TitleApp from './components/Title_App';


/*
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
  */


  const App = () => {
    return (
      <div>
        <TitleApp />
      </div>
    );
  };
  
  export default App;






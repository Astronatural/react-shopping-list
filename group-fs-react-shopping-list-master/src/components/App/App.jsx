import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import AddItem from '../AddItem/AddItem'
import DeleteList from  '../DeleteList/DeleteList.jsx';

/* Hooks and definitions:
const [shopItem, postShoppingList] = useState('');
const [itemArray, getShoppingList] = useState([]);
shopItem = Item/object to be purchased.
postShoppingList = Function to create shopItem Object.
itemArray = array of shopItem (s)
getShoppingList = function to display itemArray.

*/
const [itemArray, deleteShoppingItem] = useState();

const deleteShoppingItem = (itemId) => {
    console.log('Deleter Clicked')
    axios({
        method: 'DELETE',
        url: `/list/${id}`,
    }).then((response) => {
        console.log(response)
        getShoppingList();

    })
}


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AddItem />
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;

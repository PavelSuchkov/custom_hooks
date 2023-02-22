// import logo from './logo.svg';
// import './App.css';
import {useInput} from "./hooks/useInput";
import {Hover} from "./components/Hover";
import List from "./components/List";
import {useState} from "react";
import {useDebounce} from "./hooks/useDebounce";
import axios from "axios";
import {useRequest} from "./hooks/useRequest";

function App() {

// Applying of useInput: =======>

    // const username = useInput('')
    // const password = useInput('')
    //
    // return (
    //     <div>
    //         <input {...username} type="text" placeholder='Username'/>
    //         <input {...password} type="text" placeholder=' password'/>
    //         <button onClick={() => console.log(username.value, "  ", password.value)}>Click</button>
    //     </div>
    // )


// useHover demonstration: =======>

    // return (
    //     <Hover/>
    // )


// useScroll demonstration: =======>
//     return (
//         <List/>
//     )

// useDebounce demonstration: =======>

    // const [value, setValue] = useState('');
    // const debouncedSearch = useDebounce(search, 500)
    //
    // function search (query) {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json)
    //         })
    // }
    //
    // const onChange = (e) => {
    //     setValue(e.target.value)
    //     debouncedSearch(e.target.value)
    // }
    //
    // return (
    //     <div>
    //         <input type="text" value={value} onChange={onChange}/>
    //     </div>
    // )

// useRequest demonstration: =======>

    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка при загрузке данных</h1>
    }



    return (
        <div>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
        </div>
    );

}

export default App;

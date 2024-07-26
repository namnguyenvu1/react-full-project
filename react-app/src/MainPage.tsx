import React from 'react'
import Message from './Message'
import ListGroup from './components/ListGroup'
import Button from './components/Button'
import Input from './components/Input'
import Counter from './components/Counter'
import TextArea from './components/TextArea'
import Select from './components/Select'
import Array from './components/Array'
import ObjectArray from './components/ObjectArray'
import Cities from './components/Cities'
import { createBrowserRouter, Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const MainPage = () => {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/cities">Cities</Link>
                </li>
                </ul>

                {/* <ol className="list-group list-group-numbered">
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
                </ol> */}

            </nav>
        </div>
    )
}

const router = createBrowserRouter ([
    {
        path: "/",
        element:<MainPage/>,
        children:[
            {
                path:"/",
                element:<Array/>
            }
        ]
    }
])

// const MainPage = () => {
//   return (
//     <div>
//         <Message />
//         <ListGroup />
//         <Button />
//         <Input />

//         {/* <TextArea /> */}
//         <Array />
//         <ObjectArray />
//         <Select />
//         <Counter />

//     </div>
//   )
// }

export default MainPage